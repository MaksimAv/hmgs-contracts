"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRoomPriceSchema = exports.SetRoomPriceSchema = void 0;
const zod_1 = require("zod");
exports.SetRoomPriceSchema = zod_1.z.object({
    startDate: zod_1.z.string().date(),
    endDate: zod_1.z.string().date(),
    price: zod_1.z.number().min(0).finite(),
});
exports.GetRoomPriceSchema = zod_1.z.object({
    id: zod_1.z.number(),
    roomId: zod_1.z.number(),
    startDate: zod_1.z.string(),
    endDate: zod_1.z.string(),
    price: zod_1.z.number(),
});
//# sourceMappingURL=room.price.schema.js.map