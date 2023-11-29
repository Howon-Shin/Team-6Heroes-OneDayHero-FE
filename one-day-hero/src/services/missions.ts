import { MutableRefObject } from "react";

import { useInfiniteFetch } from "@/hooks/useInfiniteFetch";
import {
  BookmarkResponse,
  MatchResponse,
  MissionResponse,
  ProgressMissionListResponse,
  ProposalResponse,
  SuggestedMissionListResponse,
  SuggestingMissionListResponse
} from "@/types/response";

import { CustomResponse, useFetch, useMutationalFetch } from "./base";

export const useGetMissionFetch = (missionId: string, token: string) => {
  return useFetch<MissionResponse>(`/missions/${missionId}`, {
    headers: { Authorization: `Bearer ${token}` },
    next: { tags: [`mission${missionId}`] }
  });
};

export const useCreateMissionFetch = () => {
  return useMutationalFetch<MissionResponse>("/missions") as {
    mutationalFetch: (
      fetchOptions: RequestInit,
      onSuccess?: (response?: Response) => void,
      onError?: () => void
    ) => Promise<CustomResponse<MissionResponse>>;
  };
};

export const useProposeMissionFetch = () => {
  return useMutationalFetch<ProposalResponse>("/mission-proposals") as {
    mutationalFetch: (
      fetchOptions: RequestInit,
      onSuccess?: () => void,
      onError?: () => void
    ) => Promise<CustomResponse<ProposalResponse>>;
  };
};

export const useRejectProposalFetch = (proposalId: number, token: string) => {
  return useMutationalFetch<MatchResponse>(
    `/mission-proposals/${proposalId}/reject`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  ) as {
    mutationalFetch: (
      onSuccess?: () => void,
      onError?: () => void
    ) => Promise<CustomResponse<MatchResponse>>;
  };
};

export const useApproveProposalFetch = (proposalId: number, token: string) => {
  return useMutationalFetch<MatchResponse>(
    `/mission-proposals/${proposalId}/approve`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  ) as {
    mutationalFetch: (
      onSuccess?: () => void,
      onError?: () => void
    ) => Promise<CustomResponse<MatchResponse>>;
  };
};

export const usePostBookmarkFetch = (missionId: number, token: string) => {
  return useMutationalFetch<BookmarkResponse>("/bookmarks", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      missionId
    })
  });
};

export const useDeleteBookmarkFetch = (missionId: number, token: string) => {
  return useMutationalFetch<BookmarkResponse>("/bookmarks", {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      missionId
    })
  });
};

export const useGetSuggestedMissionListFetch = (
  token: string,
  observerRef: MutableRefObject<HTMLDivElement | null>
) => {
  return useInfiniteFetch<SuggestedMissionListResponse>({
    pathname: `/mission-proposals`,
    size: 4,
    observerRef,
    options: {
      headers: { Authorization: `Bearer ${token}` },
      next: { tags: [`suggested`] }
    }
  });
};

export const useGetProgressMissionListFetch = (
  token: string,
  observerRef: MutableRefObject<HTMLDivElement | null>
) => {
  return useInfiniteFetch<ProgressMissionListResponse>({
    pathname: `/missions/progress`,
    size: 4,
    observerRef,
    options: {
      headers: { Authorization: `Bearer ${token}` },
      next: { tags: [`progress`] }
    }
  });
};

export const useGetCompleteMissionListFetch = (
  token: string,
  observerRef: MutableRefObject<HTMLDivElement | null>
) => {
  return useInfiniteFetch<ProgressMissionListResponse>({
    pathname: `/missions/completed`,
    size: 10,
    observerRef,
    options: {
      headers: { Authorization: `Bearer ${token}` },
      next: { tags: [`complete`] }
    }
  });
};

export const useGetSuggestingMissionListFetch = (token: string) => {
  return useMutationalFetch<SuggestingMissionListResponse>(
    `/missions/matching`,
    {
      headers: { Authorization: `Bearer ${token}` },
      next: { tags: [`matching`] }
    }
  );
};
