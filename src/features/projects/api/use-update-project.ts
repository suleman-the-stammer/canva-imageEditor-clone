import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";
import { LOCAL_PROJECT_ID } from "@/features/projects/constants";

type ResponseType = InferResponseType<typeof client.api.projects[":id"]["$patch"], 200>;
type RequestType = InferRequestType<typeof client.api.projects[":id"]["$patch"]>["json"];

export const useUpdateProject = (id: string) => {
  const queryClient = useQueryClient();

  // Guest / demo mode: the blank in-browser project is never persisted, so
  // "saving" resolves instantly without touching the API or database.
  const isGuest = id === LOCAL_PROJECT_ID;

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationKey: ["project", { id }],
    mutationFn: async (json) => {
      if (isGuest) {
        return { data: { id, ...json } } as unknown as ResponseType;
      }

      const response = await client.api.projects[":id"].$patch({
        json,
        param: { id },
      });

      if (!response.ok) {
        throw new Error("Failed to update project");
      }

      return await response.json();
    },
    onSuccess: () => {
      if (isGuest) return;

      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["project", { id }] });
    },
    onError: () => {
      if (isGuest) return;

      toast.error("Failed to update project");
    }
  });

  return mutation;
};
