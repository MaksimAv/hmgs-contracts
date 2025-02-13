import { z } from 'zod';
import { CreateRoomRequestSchema, GetRoomResponseSchema, UpdateRoomRequestSchema } from '../schemas/room.schema';
export type CreateRoomRequest = z.infer<typeof CreateRoomRequestSchema>;
export type GetRoomResponse = z.infer<typeof GetRoomResponseSchema>;
export type UpdateRoomRequest = z.infer<typeof UpdateRoomRequestSchema>;
