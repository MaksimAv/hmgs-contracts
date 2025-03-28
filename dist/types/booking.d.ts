import { z } from 'zod';
import { CreateBookingRequestSchema } from '../schemas/booking.schema';
export type CreateBookingRequest = z.infer<typeof CreateBookingRequestSchema>;
