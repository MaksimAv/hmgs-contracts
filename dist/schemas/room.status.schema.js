"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetRoomStatusSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../enums");
exports.SetRoomStatusSchema = zod_1.z
    .object({
    status: zod_1.z.nativeEnum(enums_1.RoomStatusRequestEnum),
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
//# sourceMappingURL=room.status.schema.js.map