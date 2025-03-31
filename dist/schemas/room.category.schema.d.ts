import { z } from 'zod';
export declare const CreateRoomCategoryRequestSchema: z.ZodObject<{
    title: z.ZodString;
    slug: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    slug: string;
    description: string;
}, {
    title: string;
    slug: string;
    description: string;
}>;
export declare const GetRoomCategoryResponseSchema: z.ZodObject<{
    id: z.ZodNumber;
    slug: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    slug: string;
    description: string;
    id: number;
}, {
    title: string;
    slug: string;
    description: string;
    id: number;
}>;
export declare const UpdateRoomCategoryRequestSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    slug?: string | undefined;
    description?: string | undefined;
}, {
    title?: string | undefined;
    slug?: string | undefined;
    description?: string | undefined;
}>;
