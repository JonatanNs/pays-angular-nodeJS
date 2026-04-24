import express from "express";
import {body} from "express-validator";
import UserController from "./user.controller.js";

export const router = express.Router();

router.post('/auth/connexion', UserController.showLogin, [
    body("email")
        .isEmail(),
    body("password")
        .notEmpty()
]);

router.post('/auth/inscription', UserController.showRegister, [
    body("username")
        .trim()
        .notEmpty()
        .isLength({min:3}),

    body("email")
        .isEmail(),
    body("password")
        .notEmpty()
])