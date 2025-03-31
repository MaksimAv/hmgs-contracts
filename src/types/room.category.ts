import { z } from 'zod';
import {
  CreateRoomCategoryRequestSchema,
  UpdateRoomCategoryRequestSchema,
  GetRoomCategoryResponseSchema,
} from '../schemas/room.category.schema';

export type SetRoomCategoryRequest = z.infer<typeof CreateRoomCategoryRequestSchema>;
export type UpdateRoomCategoryRequest = z.infer<typeof UpdateRoomCategoryRequestSchema>;
export type GetRoomCategoryResponse = z.infer<typeof GetRoomCategoryResponseSchema>;
