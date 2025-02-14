import { z } from 'zod';

export const SetRoomPriceSchema = z.object({
  startDate: z.date(),
  endDate: z.date(),
  price: z.number().min(0).finite(),
});

export const GetRoomPriceByPeriodSchema = z.array(
  z.object({
    id: z.number(),
    roomId: z.number(),
    startDate: z.string(),
    endDate: z.string(),
    price: z.number(),
  }),
);

export const GetRoomPriceByDateSchema = z.object({
  id: z.number(),
  roomId: z.number(),
  startDate: z.string(),
  endDate: z.string(),
  price: z.number(),
});
