import { z } from 'zod';
import { SetRoomStatusSchema } from 'src/schemas/room.status.schema';

export type SetRoomStatusRequest = z.infer<typeof SetRoomStatusSchema>;
