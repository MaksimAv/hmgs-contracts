import { z } from 'zod';
import { CreateRoomRequestSchema, GetRoomResponseSchema, UpdateRoomRequestSchema } from '../schemas/room.schema';
export type CreateRoomRequestDto = z.infer<typeof CreateRoomRequestSchema>;
export type GetRoomResponseDto = z.infer<typeof GetRoomResponseSchema>;
export type UpdateRoomRequestDto = z.infer<typeof UpdateRoomRequestSchema>;
