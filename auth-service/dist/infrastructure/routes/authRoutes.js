"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../../presentation/controllers");
const authRoutes = (dependencies) => {
    const { signup, login, isExist, logout, updateUser } = (0, controllers_1.controllers)(dependencies);
    const router = (0, express_1.Router)();
    router.route("/signup")
        .post(signup);
    router.route("/login")
        .post(login);
    router.route("/isExist")
        .get(isExist);
    router.route("/updateUser")
        .post(updateUser);
    router.route("/logout")
        .get(logout);
    return router;
};
exports.authRoutes = authRoutes;
