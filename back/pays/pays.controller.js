import paysService from "./pays.service.js";


export const getAllPays = async (req, res) => {
    try {
        const pays = await paysService.findAllPays();
        res.json(pays);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getPays = async (req, res) => {
    try {
        const pays = await paysService.findByCode(req.params.code);

        if (pays) {
            res.json(pays.name);
        } else {
            res.status(404).send("Pays non trouvée");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createPays = async (req, res) =>{
    try{
        const newPays = await paysService.savePays(req.params.pays);
        if(newPays){
            res.json(newPays);
        } else {
            res.status(400).send("Une erreur est survenu");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

}
const deletePays = async (req, res) =>{
    try{
        const responseDelete = await paysService.deletePays(req.params.uuid);
        res.json(responseDelete);
    } catch (err){
        res.status(500).json({ error: err.message });
    }
}
const updatePays = async (req, res ) =>{
    try{
        const updatePays = await paysService.updatePays(req.params.pays);
        res.json(updatePays);
    } catch (err){
        res.status(500).json({ error: err.message });
    }
}

export default {
    getPays,
    getAllPays,
    createPays,
    deletePays,
    updatePays
};




