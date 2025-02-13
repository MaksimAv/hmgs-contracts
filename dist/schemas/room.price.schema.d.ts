import { z } from 'zod';
export declare const SetRoomPriceSchema: z.ZodArray<z.ZodObject<{
    startDate: z.ZodDate;
    endDate: z.ZodDate;
    price: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    startDate: Date;
    endDate: Date;
    price: number;
}, {
    startDate: Date;
    endDate: Date;
    price: number;
}>, "many">;
export declare const GetRoomPriceByPeriodSchema: z.ZodArray<z.ZodObject<{
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
}>, "many">;
export declare const GetRoomPriceByDateSchema: z.ZodObject<{
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
//# sourceMappingURL=room.price.schema.d.ts.map