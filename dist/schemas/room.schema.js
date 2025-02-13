"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoomRequestSchema = exports.GetRoomResponseSchema = exports.CreateRoomRequestSchema = void 0;
const zod_1 = require("zod");
exports.CreateRoomRequestSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    slug: zod_1.z.string().min(1),
    description: zod_1.z.string(),
    regularPrice: zod_1.z.number().min(0).finite(),
    currencyCode: zod_1.z.string().min(1),
    visibility: zod_1.z.string().min(1),
    capacity: zod_1.z.number().min(1),
    size: zod_1.z.number().min(1).finite().optional(),
    floor: zod_1.z.number().min(-99).finite().optional(),
    categoryId: zod_1.z.number().min(1),
    minStayDays: zod_1.z.number().min(1).finite(),
    maxStayDays: zod_1.z.number().min(1).finite(),
});
exports.GetRoomResponseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    slug: zod_1.z.string(),
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    capacity: zod_1.z.number(),
    status: zod_1.z.string(),
    cleaningStatus: zod_1.z.string(),
    visibility: zod_1.z.string(),
    currencyCode: zod_1.z.string(),
    regularPrice: zod_1.z.number(),
    size: zod_1.z.number(),
    floor: zod_1.z.number(),
    categoryId: zod_1.z.number(),
    minStayDays: zod_1.z.number(),
    maxStayDays: zod_1.z.number(),
});
exports.UpdateRoomRequestSchema = exports.CreateRoomRequestSchema.partial();
//# sourceMappingURL=room.schema.js.map