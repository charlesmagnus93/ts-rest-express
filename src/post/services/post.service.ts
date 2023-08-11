import { z } from 'zod';
import shortid from 'shortid';
import { PostDto, posts } from '../models/post.model';

const getPost = async (id: string) => {
  const post = posts.filter((post) => post.id === id);
  if (post.length !== 0) {
    return post[0];
  }
}

const createPost = async (data: z.infer<typeof PostDto>) => {
  const post = {
    id: shortid.generate(),
    title: data.title,
    body: data.body,
  }
  posts.push(post);
  return post;
}

export { getPost, createPost }