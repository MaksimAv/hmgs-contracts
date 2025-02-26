import { z } from 'zod';
import { RegistrationUserSchema, LoginUserSchema, UpdateUserSchema } from '../schemas';

export type LoginUserRequest = z.infer<typeof LoginUserSchema>;
export type RegistrationUserRequest = z.infer<typeof RegistrationUserSchema>;
export type UpdateUserRequest = z.infer<typeof UpdateUserSchema>;
