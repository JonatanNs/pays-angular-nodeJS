import express from "express";
import paysController from "./pays.controller.js";

const router = express.Router();

router.get("/", paysController.getAllPays);
router.get("/:uuid", paysController.getPays);
router.post("/ajouter", paysController.createPays);
router.delete("/supprimer/:uuid", paysController.deletePays);
router.put("/modifier", paysController.updatePays);

export default router;