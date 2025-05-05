import { TPost, TPostResponse } from "@/types";
import { get } from "./axios-config";

export const getListPosts = async () => {
  return get<TPostResponse>({
    url: "posts",
    params: {
      limit: 6,
    },
  });
};

export const getPostById = async ({ postId }: {postId: number}) => {
  return get<TPost>({
    url: `posts/${postId}`,
  })
}
