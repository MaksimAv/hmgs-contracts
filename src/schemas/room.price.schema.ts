import { z } from 'zod';

export const SetRoomPriceSchema = z.object({
  startDate: z.string().date(),
  endDate: z.string().date(),
  price: z.number().min(0).finite(),
});

export const GetRoomPriceSchema = z.object({
  id: z.number(),
  roomId: z.number(),
  startDate: z.string(),
  endDate: z.string(),
  price: z.number(),
});
