import { z } from 'zod';
export declare const SetRoomPriceSchema: z.ZodEffects<z.ZodObject<{
    price: z.ZodNumber;
    startDate: z.ZodEffects<z.ZodEffects<z.ZodString, Date, string>, Date, string>;
    endDate: z.ZodEffects<z.ZodEffects<z.ZodString, Date, string>, Date, string>;
}, "strip", z.ZodTypeAny, {
    price: number;
    startDate: Date;
    endDate: Date;
}, {
    price: number;
    startDate: string;
    endDate: string;
}>, {
    price: number;
    startDate: Date;
    endDate: Date;
}, {
    price: number;
    startDate: string;
    endDate: string;
}>;
export declare const GetRoomPriceSchema: z.ZodObject<{
    id: z.ZodNumber;
    roomId: z.ZodNumber;
    startDate: z.ZodDate;
    endDate: z.ZodDate;
    price: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
    price: number;
    startDate: Date;
    endDate: Date;
    roomId: number;
}, {
    id: number;
    price: number;
    startDate: Date;
    endDate: Date;
    roomId: number;
}>;
