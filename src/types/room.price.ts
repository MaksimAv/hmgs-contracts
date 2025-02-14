import { z } from 'zod';
import { SetRoomPriceSchema, GetRoomPriceSchema } from '../schemas/room.price.schema';

export type SetRoomPriceRequest = z.infer<typeof SetRoomPriceSchema>;
export type GetRoomPriceResponse = z.infer<typeof GetRoomPriceSchema>;
