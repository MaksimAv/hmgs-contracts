import { z } from 'zod';
import { RoomStatusRequestEnum } from 'src/enums';

export const CreateRoomRequestSchema = z.object({
  title: z.string().min(1).max(256),
  slug: z.string().min(1).max(128),
  description: z.string().max(4096).optional(),
  capacity: z.number().min(1).max(1024).finite(),
  categoryId: z.number().min(1).finite(),
  floor: z.number().min(-99).max(1024).finite(),
  size: z.number().min(1).max(4096).finite(),
  minStayDays: z.number().min(1).finite(),
  maxStayDays: z.number().min(1).finite(),
  visibility: z.nativeEnum(RoomStatusRequestEnum),
  regularPrice: z.number().min(0).finite(),
  currencyCode: z.string().min(1),
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
