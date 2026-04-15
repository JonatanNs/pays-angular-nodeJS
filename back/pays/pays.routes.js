import express from "express";
import paysController from "./pays.controller.js";

const router = express.Router();

router.get("/", paysController.getAllPays);
router.get("/:uuid", paysController.getPays);
router.post("/ajouter-pays", paysController.createPays);
router.delete("/supprimer-pays", paysController.deletePays);
router.put("/modifier-pays", paysController.updatePays);

export default router;