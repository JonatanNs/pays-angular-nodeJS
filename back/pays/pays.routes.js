import express from "express";
import paysController from "./pays.controller.js";
import {body} from "express-validator";

const router = express.Router();

router.get("/", paysController.getAllPays);

router.get("/:uuid", paysController.getPays);

router.post("/ajouter", paysController.createPays, [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Le nom est obligatoire.")
        .isLength({min: 3})
        .withMessage("Le nom doit contenir au moins 3 caractères."),
    body("code")
        .trim()
        .isAlpha()
        .withMessage("Le code doit contenir uniquement des lettres.")
        .isLength({min: 2, max: 2})
        .withMessage("Le code doit contenir exactement 2 lettres.")
        .customSanitizer(v => v.toUpperCase())
    ],
);

router.delete("/supprimer/:uuid", paysController.deletePays);

router.put("/modifier", paysController.updatePays, [
        body("name")
            .trim()
            .notEmpty()
            .withMessage("Le nom est obligatoire.")
            .isLength({min: 3})
            .withMessage("Le nom doit contenir au moins 3 caractères."),
        body("code")
            .trim()
            .isAlpha()
            .withMessage("Le code doit contenir uniquement des lettres.")
            .isLength({min: 2, max: 2})
            .withMessage("Le code doit contenir exactement 2 lettres.")
            .customSanitizer(v => v.toUpperCase())
    ],
);

export default router;