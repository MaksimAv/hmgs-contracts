import { z } from 'zod';

export const CreateBookingRequestSchema = z.object({
  roomIds: z.array(z.number()),
  startDate: z
    .string()
    .transform((value) => new Date(value))
    .refine((date) => !isNaN(date.getTime()), { params: { code: z.ZodIssueCode.invalid_date } }),
  endDate: z
    .string()
    .transform((value) => new Date(value))
    .refine((date) => !isNaN(date.getTime()), { params: { code: z.ZodIssueCode.invalid_date } }),
});
