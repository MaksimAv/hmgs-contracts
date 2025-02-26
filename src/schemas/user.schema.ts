import { z } from 'zod';

export const RegistrationUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  middleName: z.string().optional(),
  phone: z.string(),
  email: z.string().optional(),
  password: z.string(),
  address: z.string().optional(),
  birthday: z.date().optional(),
});

export const LoginUserSchema = z.object({
  login: z.string(),
  password: z.string(),
});

export const UpdateUserSchema = RegistrationUserSchema.partial().omit({ phone: true, password: true });
