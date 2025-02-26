"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserSchema = exports.LoginUserSchema = exports.RegistrationUserSchema = void 0;
const zod_1 = require("zod");
exports.RegistrationUserSchema = zod_1.z.object({
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    middleName: zod_1.z.string().optional(),
    phone: zod_1.z.string(),
    email: zod_1.z.string().optional(),
    password: zod_1.z.string(),
    address: zod_1.z.string().optional(),
    birthday: zod_1.z.date().optional(),
});
exports.LoginUserSchema = zod_1.z.object({
    login: zod_1.z.string(),
    password: zod_1.z.string(),
});
exports.UpdateUserSchema = exports.RegistrationUserSchema.partial().omit({ phone: true, password: true });
//# sourceMappingURL=user.schema.js.map