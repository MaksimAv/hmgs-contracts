import { z } from 'zod';
export declare const SetRoomStatusSchema: z.ZodEffects<z.ZodObject<{
    status: z.ZodEnum<["AVAILABLE_FOR_BOOKING", "OUT_OF_ORDER", "STAYING", "LONG_STAYING", "BOOKED", "MAINTENANCE"]>;
    startDate: z.ZodEffects<z.ZodEffects<z.ZodString, Date, string>, Date, string>;
    endDate: z.ZodEffects<z.ZodEffects<z.ZodString, Date, string>, Date, string>;
}, "strip", z.ZodTypeAny, {
    status: "AVAILABLE_FOR_BOOKING" | "OUT_OF_ORDER" | "STAYING" | "LONG_STAYING" | "BOOKED" | "MAINTENANCE";
    startDate: Date;
    endDate: Date;
}, {
    status: "AVAILABLE_FOR_BOOKING" | "OUT_OF_ORDER" | "STAYING" | "LONG_STAYING" | "BOOKED" | "MAINTENANCE";
    startDate: string;
    endDate: string;
}>, {
    status: "AVAILABLE_FOR_BOOKING" | "OUT_OF_ORDER" | "STAYING" | "LONG_STAYING" | "BOOKED" | "MAINTENANCE";
    startDate: Date;
    endDate: Date;
}, {
    status: "AVAILABLE_FOR_BOOKING" | "OUT_OF_ORDER" | "STAYING" | "LONG_STAYING" | "BOOKED" | "MAINTENANCE";
    startDate: string;
    endDate: string;
}>;
