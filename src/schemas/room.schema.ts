import { z } from 'zod';

export const CreateRoomRequestSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  description: z.string(),
  regularPrice: z.number().min(0).finite(),
  currencyCode: z.string().min(1),
  visibility: z.string().min(1),
  capacity: z.number().min(1),
  size: z.number().min(1).finite().optional(),
  floor: z.number().min(-99).finite().optional(),
  categoryId: z.number().min(1),
  minStayDays: z.number().min(1).finite(),
  maxStayDays: z.number().min(1).finite(),
});

export const GetRoomResponseSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  capacity: z.number(),
  status: z.string(),
  cleaningStatus: z.string(),
  visibility: z.string(),
  currencyCode: z.string(),
  regularPrice: z.number(),
  size: z.number(),
  floor: z.number(),
  categoryId: z.number(),
  minStayDays: z.number(),
  maxStayDays: z.number(),
});

export const UpdateRoomRequestSchema = CreateRoomRequestSchema.partial();
