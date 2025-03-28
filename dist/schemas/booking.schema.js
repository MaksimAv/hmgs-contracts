"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookingRequestSchema = void 0;
const zod_1 = require("zod");
exports.CreateBookingRequestSchema = zod_1.z.object({
    roomIds: zod_1.z.array(zod_1.z.number()),
    startDate: zod_1.z
        .string()
        .transform((value) => new Date(value))
        .refine((date) => !isNaN(date.getTime()), { params: { code: zod_1.z.ZodIssueCode.invalid_date } }),
    endDate: zod_1.z
        .string()
        .transform((value) => new Date(value))
        .refine((date) => !isNaN(date.getTime()), { params: { code: zod_1.z.ZodIssueCode.invalid_date } }),
});
//# sourceMappingURL=booking.schema.js.map