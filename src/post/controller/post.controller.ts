import { z } from 'zod';
import { Contract } from "../../config";
import { PostDto, PostSchema } from '../models/post.model';

export const postController = Contract.router({
  createPost: {
    method: 'POST',
    path: '/posts',
    responses: {
      201: PostSchema,
    },
    body: PostDto,
    summary: 'Create a post',
    description: "Create a new post",
  },
  getPosts: {
    method: 'GET',
    path: '/posts',
    responses: {
      200: PostSchema.array(),
    },
    summary: 'All posts',
    description: 'Get all posts',
    strictStatusCodes: true,
  },
  getPost: {
    method: 'GET',
    path: `/posts/:id`,
    responses: {
      200: PostSchema.required(),
      404: z.object({
        message: z.string(),
      })
    },
    summary: 'Post by id',
    description: 'Get a post by id',
    strictStatusCodes: true,
  },
});