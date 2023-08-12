import { Server } from '../../config';
import { createPost, getPost } from "../services/post.service";
import { postController } from '../controller/post.controller';
import { posts } from '../models/post.model';

const postRouter = Server.router(postController, {
  getPosts: async () => {
    return {
      status: 200,
      body: posts
    };
  },
  getPost: async ({ params: { id } }) => {
    const post = await getPost(id);
    if (post) {
      return {
        status: 200,
        body: post,
      };
    }
    return {
      status: 404,
      body: {
        message: "Post not found",
      }
    }
  },
  createPost: async ({ body }) => {
    const post = await createPost(body);
    return {
      status: 201,
      body: post,
    };
  },
});

export { postRouter }