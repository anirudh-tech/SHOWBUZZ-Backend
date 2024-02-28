"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupController = void 0;
const signupValidation_1 = require("../../utils/validations/signupValidation");
const hashPassword_1 = require("../../utils/bcrypt/hashPassword");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signupController = (dependencies) => {
    const { useCases: { signupUserUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { value, error } = signupValidation_1.signupValidation.validate(req.body);
            if (error) {
                throw new Error(error.message);
            }
            value.password = yield (0, hashPassword_1.hashPassword)(value.password);
            const result = yield signupUserUseCase(dependencies).execute(value);
            if (!result) {
                throw new Error("User creation failed!");
            }
            let payload = {
                _id: String(result === null || result === void 0 ? void 0 : result._id),
                email: result === null || result === void 0 ? void 0 : result.email,
                role: result === null || result === void 0 ? void 0 : result.role
            };
            const accessToken = jsonwebtoken_1.default.sign(payload, String(process.env.ACCESS_TOKEN_SECRET), { expiresIn: '1h' });
            res.cookie("access_token", accessToken, {
                httpOnly: true
            });
            res.status(200).json({
                success: true,
                data: result,
                message: "User created!"
            });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.signupController = signupController;
