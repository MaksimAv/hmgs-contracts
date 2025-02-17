import { z } from 'zod';
import { RoomStatusRequestEnum } from 'src/enums';

export const SetRoomStatusSchema = z
  .object({
    status: z.nativeEnum(RoomStatusRequestEnum),
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
