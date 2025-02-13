import { z } from 'zod';
import { GetRoomPriceByDateSchema, GetRoomPriceByPeriodSchema, SetRoomPriceSchema } from '../schemas/room.price.schema';
export type SetRoomPriceDto = z.infer<typeof SetRoomPriceSchema>;
export type GetRoomPriceByPeriodDto = z.infer<typeof GetRoomPriceByPeriodSchema>;
export type GetRoomPriceByDateDto = z.infer<typeof GetRoomPriceByDateSchema>;
