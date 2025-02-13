import { z } from 'zod';
import { GetRoomPriceByDateSchema, GetRoomPriceByPeriodSchema, SetRoomPriceSchema } from '../schemas/room.price.schema';

export type SetRoomPriceRequest = z.infer<typeof SetRoomPriceSchema>;
export type GetRoomPriceByPeriodResponse = z.infer<typeof GetRoomPriceByPeriodSchema>;
export type GetRoomPriceByDateResponse = z.infer<typeof GetRoomPriceByDateSchema>;
