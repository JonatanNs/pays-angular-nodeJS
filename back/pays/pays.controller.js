import paysService from "./pays.service.js";
import {apiResponse} from "../dto/apiResponse.js";
import {validationResult} from "express-validator";

export const getAllPays = async (req, res) => {
    try {
        const pays = await paysService.findAllPays();

        return res
                .status(200)
                .json(apiResponse(200, "Pays récupérés", pays));

    } catch (err) {
        return res
                .status(500)
                .json(apiResponse(500, "Une erreur est survenu.", null));
    }
};

const getPays = async (req, res) => {
    try {
        const pays = await paysService.findById(req.params.uuid);
        if (pays) {
           return  res
                   .status(200)
                   .json(apiResponse(200, "Pays récupéré", pays));
        } else {
           return res
            .status(404)
            .json(apiResponse(404, "Pays non trouvé", null));
        }
    } catch (err) {
        return res
            .status(500)
            .json(apiResponse(500, "Une erreur est survenu.", null));
    }
};

const createPays = async (req, res) =>{
    try{

        const errors = validationResult(req);

        if( !errors.isEmpty() ){
            return res
                .status(400)
                .json( apiResponse(400, "Validation error", errors.array()) )
        }

        if(await paysService.findByCode(req.body.code)){
            return res
                .status(409)
                .json(apiResponse(409,  "Le pays existe déjà !", null ));
        }

        if(await paysService.findByName(req.body.name)){
            return res
                .status(409)
                .json(apiResponse(409,  "Le pays existe déjà !", null ));
        }

        const newPays = await paysService.savePays({
            name: req.body.name,
            code: req.body.code,
            uuid: crypto.randomUUID()
        });

        if(newPays){
            return  res
                .status(200)
                .json(apiResponse(200, "Création du Pays éffectuer avec succes.", newPays));
        } else {
            res.status(400).send("Une erreur est survenu");
            return res
                .status(400)
                .json(apiResponse(400, "Une erreur est survenu.", null));
        }
    } catch (err) {
        return res
            .status(500)
            .json(apiResponse(500, "Une erreur est survenu.", null));
    }
}

const deletePays = async (req, res) =>{
    try{
        const result = await paysService.deletePays(req.params.uuid);

        if (result.deletedCount === 0) {
            return res
                .status(404)
                .json(apiResponse(404, "Le pays n'existe pas !", null));
        }

        return res
            .status(200)
            .json(apiResponse(200, "Suppréssion effectué avec succes.", null));

    } catch (err){
        return res
            .status(500)
            .json(apiResponse(500, "Une erreur est survenu.", null));
    }
}

const updatePays = async (req, res) => {
    try {
        const { uuid, name, code } = req.body;

        const errors = validationResult(req);

        if( !errors.isEmpty() ){
            return res
                .status(400)
                .json( apiResponse(400, "Validation error", errors.array()) )
        }

        if (!await paysService.findById(uuid)) {
            return res
                .status(404)
                .json(apiResponse(404, "Le pays n'existe pas !", null));
        }

        if (await paysService.findByCode(code)) {
            return res
                .status(409)
                .json(apiResponse(409, "Ce code pays existe déjà !", null));
        }

        if (await paysService.findByName(name)) {
            return res
                .status(409)
                .json(apiResponse(409, "Ce pays existe déjà !", null));
        }

        const updatedPays = await paysService.updatePays(uuid, {name, code});

        return res
            .status(200)
            .json(apiResponse(200, "Mise à jour effectuée avec succès", updatedPays));

    } catch (err) {
        return res
            .status(500)
            .json(apiResponse(500, "Une erreur est survenue", null));
    }
};

export default {
    getPays,
    getAllPays,
    createPays,
    deletePays,
    updatePays
};




