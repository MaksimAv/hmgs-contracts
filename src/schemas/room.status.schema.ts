import { z } from 'zod';

const roomStatusArray = [
  'AVAILABLE_FOR_BOOKING',
  'OUT_OF_ORDER',
  'STAYING',
  'LONG_STAYING',
  'BOOKED',
  'MAINTENANCE',
] as const;

export const SetRoomStatusSchema = z
  .object({
    status: z.enum(roomStatusArray),
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
