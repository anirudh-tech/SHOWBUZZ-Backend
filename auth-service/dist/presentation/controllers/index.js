"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const signup_1 = require("./signup");
const controllers = (dependencies) => {
    return {
        signup: (0, signup_1.signupController)(dependencies)
    };
};
exports.controllers = controllers;
