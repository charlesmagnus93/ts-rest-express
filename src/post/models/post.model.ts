import { z } from 'zod';

export let posts: Array<z.infer<typeof PostSchema>> = [];

export const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
});

export const PostDto = z.object({
  title: z.string(),
  body: z.string(),
})
