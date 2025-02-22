import { z } from 'zod';
import { SetRoomStatusSchema } from '../schemas';

export type SetRoomStatusRequest = z.infer<typeof SetRoomStatusSchema>;
