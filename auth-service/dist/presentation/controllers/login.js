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
exports.loginController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginController = (dependencies) => {
    const { useCases: { loginUserUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userCredentials = req.body;
            const user = yield loginUserUseCase(dependencies).execute(userCredentials);
            if (user) {
                let payload = {
                    _id: String(user === null || user === void 0 ? void 0 : user._id),
                    email: user === null || user === void 0 ? void 0 : user.email,
                    role: user === null || user === void 0 ? void 0 : user.role,
                };
                const accessToken = jsonwebtoken_1.default.sign(payload, String(process.env.ACCESS_TOKEN_SECRET), { expiresIn: "1h" });
                console.log(accessToken, 'token');
                res.cookie("user_jwt", accessToken, {
                    httpOnly: true,
                });
                res.status(200).json({
                    success: true,
                    user: user,
                    message: "User verified!",
                });
            }
        }
        catch (error) {
            next(error);
        }
    });
};
exports.loginController = loginController;
