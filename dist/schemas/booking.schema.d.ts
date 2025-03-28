import { z } from 'zod';
export declare const CreateBookingRequestSchema: z.ZodObject<{
    roomIds: z.ZodArray<z.ZodNumber, "many">;
    startDate: z.ZodEffects<z.ZodEffects<z.ZodString, Date, string>, Date, string>;
    endDate: z.ZodEffects<z.ZodEffects<z.ZodString, Date, string>, Date, string>;
}, "strip", z.ZodTypeAny, {
    startDate: Date;
    endDate: Date;
    roomIds: number[];
}, {
    startDate: string;
    endDate: string;
    roomIds: number[];
}>;
