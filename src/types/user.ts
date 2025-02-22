import { z } from 'zod';
import { RegistrationUserSchema, LoginUserSchema, CreateUserSchema, UpdateUserSchema } from '../schemas';

export type LoginUserRequest = z.infer<typeof LoginUserSchema>;
export type RegistrationUserRequest = z.infer<typeof RegistrationUserSchema>;
export type CreateUserRequest = z.infer<typeof CreateUserSchema>;
export type UpdateUserRequest = z.infer<typeof UpdateUserSchema>;
