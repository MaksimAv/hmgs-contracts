import { z } from 'zod';
export declare const SetRoomPriceSchema: z.ZodObject<{
    startDate: z.ZodString;
    endDate: z.ZodString;
    price: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    startDate: string;
    endDate: string;
    price: number;
}, {
    startDate: string;
    endDate: string;
    price: number;
}>;
export declare const GetRoomPriceSchema: z.ZodObject<{
    id: z.ZodNumber;
    roomId: z.ZodNumber;
    startDate: z.ZodString;
    endDate: z.ZodString;
    price: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
    startDate: string;
    endDate: string;
    price: number;
    roomId: number;
}, {
    id: number;
    startDate: string;
    endDate: string;
    price: number;
    roomId: number;
}>;
