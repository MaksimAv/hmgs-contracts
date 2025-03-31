import { z } from 'zod';

export const CreateRoomCategoryRequestSchema = z.object({
  title: z.string().min(1).max(256),
  slug: z.string().min(1).max(128),
  description: z.string().max(4096),
});

export const GetRoomCategoryResponseSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
});

export const UpdateRoomCategoryRequestSchema = CreateRoomCategoryRequestSchema.partial();
