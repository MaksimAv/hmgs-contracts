import { z } from 'zod';
import { RoomStatusRequestEnum } from '../enums';
export declare const SetRoomStatusSchema: z.ZodEffects<z.ZodObject<{
    status: z.ZodNativeEnum<typeof RoomStatusRequestEnum>;
    startDate: z.ZodEffects<z.ZodEffects<z.ZodString, Date, string>, Date, string>;
    endDate: z.ZodEffects<z.ZodEffects<z.ZodString, Date, string>, Date, string>;
}, "strip", z.ZodTypeAny, {
    status: RoomStatusRequestEnum;
    startDate: Date;
    endDate: Date;
}, {
    status: RoomStatusRequestEnum;
    startDate: string;
    endDate: string;
}>, {
    status: RoomStatusRequestEnum;
    startDate: Date;
    endDate: Date;
}, {
    status: RoomStatusRequestEnum;
    startDate: string;
    endDate: string;
}>;
