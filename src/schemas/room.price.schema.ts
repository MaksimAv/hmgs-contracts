import { z } from 'zod';

export const SetRoomPriceSchema = z
  .object({
    price: z.number().min(0).finite(),
    startDate: z
      .string()
      .transform((value) => new Date(value))
      .refine((date) => !isNaN(date.getTime()), { params: { code: z.ZodIssueCode.invalid_date } }),
    endDate: z
      .string()
      .transform((value) => new Date(value))
      .refine((date) => !isNaN(date.getTime()), { params: { code: z.ZodIssueCode.invalid_date } }),
  })
  .refine((data) => data.startDate <= data.endDate, {
    params: { code: z.ZodIssueCode.too_big },
    path: ['startDate'],
  });

export const GetRoomPriceSchema = z.object({
  id: z.number(),
  roomId: z.number(),
  startDate: z.date(),
  endDate: z.date(),
  price: z.number(),
});
