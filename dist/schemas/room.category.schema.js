"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoomCategoryRequestSchema = exports.GetRoomCategoryResponseSchema = exports.CreateRoomCategoryRequestSchema = void 0;
const zod_1 = require("zod");
exports.CreateRoomCategoryRequestSchema = zod_1.z.object({
    title: zod_1.z.string().min(1).max(256),
    slug: zod_1.z.string().min(1).max(128),
    description: zod_1.z.string().max(4096),
});
exports.GetRoomCategoryResponseSchema = zod_1.z.object({
    id: zod_1.z.number(),
    slug: zod_1.z.string(),
    title: zod_1.z.string(),
    description: zod_1.z.string(),
});
exports.UpdateRoomCategoryRequestSchema = exports.CreateRoomCategoryRequestSchema.partial();
//# sourceMappingURL=room.category.schema.js.map