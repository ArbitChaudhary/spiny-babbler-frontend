import { customRequest } from './axios/custom-request';

const PREFIX = 'posts';

export interface CreatePostDto {
  context: string;
  postType: string;
  company: string;
  group: string;
}

export interface UpdatePostDto {
  context: string;
  postType: string;
  company: string;
  group: string;
}

export interface AddCommentDto {
  content: string;
}

export const postService = {
  getUserPosts: async () => {
    const response = await customRequest.get(`${PREFIX}`);
    return response.data;
  },
  getFeed: async () => {
    const response = await customRequest.get(`${PREFIX}/me/feeds`);

    return response.data;
  },
  getPostById: async (id: string) => {
    const response = await customRequest.get(`${PREFIX}/${id}`);

    return response.data;
  },
  createPost: async (data: CreatePostDto) => {
    const response = await customRequest.post(`${PREFIX}`, data);

    return response.data;
  },
  updatePost: async (id: string, data: UpdatePostDto) => {
    const response = await customRequest.patch(`${PREFIX}/${id}`, data);

    return response.data;
  },
  removePost: async (id: string) => {
    const response = await customRequest.delete(`${PREFIX}/${id}`);

    return response.data;
  },
  getPostComments: async (id: string) => {
    const response = await customRequest.get(`${PREFIX}/${id}/comments`);

    return response.data;
  },
  getPostLikes: async (id: string) => {
    const response = await customRequest.get(`${PREFIX}/${id}/likes`);

    return response.data;
  },
  addComment: async (id: string, data: AddCommentDto) => {
    const response = await customRequest.post(`${PREFIX}/${id}/comments`, data);

    return response.data;
  },
  removeComment: async (postId: string, commentId: string) => {
    const response = await customRequest.post(`${PREFIX}/${postId}/comments`, {
      commentId,
    });

    return response.data;
  },
  addLike: async (id: string) => {
    const response = await customRequest.patch(`${PREFIX}/${id}/add/like`);

    return response.data;
  },
  removeLike: async (id: string) => {
    const response = await customRequest.patch(`${PREFIX}/${id}/remove/like`);

    return response.data;
  },
};
