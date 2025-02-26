import { z } from 'zod';
export declare const RegistrationUserSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    middleName: z.ZodOptional<z.ZodString>;
    phone: z.ZodString;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodString;
    address: z.ZodOptional<z.ZodString>;
    birthday: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    middleName?: string | undefined;
    email?: string | undefined;
    address?: string | undefined;
    birthday?: Date | undefined;
}, {
    firstName: string;
    lastName: string;
    phone: string;
    password: string;
    middleName?: string | undefined;
    email?: string | undefined;
    address?: string | undefined;
    birthday?: Date | undefined;
}>;
export declare const LoginUserSchema: z.ZodObject<{
    login: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    login: string;
}, {
    password: string;
    login: string;
}>;
export declare const UpdateUserSchema: z.ZodObject<Omit<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    middleName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    phone: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    password: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    birthday: z.ZodOptional<z.ZodOptional<z.ZodDate>>;
}, "phone" | "password">, "strip", z.ZodTypeAny, {
    firstName?: string | undefined;
    lastName?: string | undefined;
    middleName?: string | undefined;
    email?: string | undefined;
    address?: string | undefined;
    birthday?: Date | undefined;
}, {
    firstName?: string | undefined;
    lastName?: string | undefined;
    middleName?: string | undefined;
    email?: string | undefined;
    address?: string | undefined;
    birthday?: Date | undefined;
}>;
