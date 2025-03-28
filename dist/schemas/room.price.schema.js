"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRoomPriceSchema = exports.SetRoomPriceSchema = void 0;
const zod_1 = require("zod");
exports.SetRoomPriceSchema = zod_1.z
    .object({
    price: zod_1.z.number().min(0).finite(),
    startDate: zod_1.z
        .string()
        .transform((value) => new Date(value))
        .refine((date) => !isNaN(date.getTime()), { params: { code: zod_1.z.ZodIssueCode.invalid_date } }),
    endDate: zod_1.z
        .string()
        .transform((value) => new Date(value))
        .refine((date) => !isNaN(date.getTime()), { params: { code: zod_1.z.ZodIssueCode.invalid_date } }),
})
    .refine((data) => data.startDate <= data.endDate, {
    params: { code: zod_1.z.ZodIssueCode.too_big },
    path: ['startDate'],
});
exports.GetRoomPriceSchema = zod_1.z.object({
    id: zod_1.z.number(),
    roomId: zod_1.z.number(),
    startDate: zod_1.z.date(),
    endDate: zod_1.z.date(),
    price: zod_1.z.number(),
});
//# sourceMappingURL=room.price.schema.js.map