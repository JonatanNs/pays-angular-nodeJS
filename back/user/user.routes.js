import express from "express";
import {body} from "express-validator";
import UserController from "./user.controller.js";

export const routerAuth = express.Router();

routerAuth.post('/connexion',
    [
        body("email").isEmail(),
        body("password").notEmpty()
    ],
    UserController.showLogin
);

routerAuth.post('/inscription',
    [
        body("username").trim().notEmpty().isLength({ min: 3 }),
        body("email").isEmail(),
        body("password").notEmpty()
    ],
    UserController.showRegister
);