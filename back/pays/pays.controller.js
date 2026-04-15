import Pays from "./pays.model.js";

const getAllPays = async (req, res) => {
    try {
        const allPays = await Pays.find().then((pays) => {
            res.json(pays);
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getPays = async (req, res) => {
    try {
        const pays = await Pays.findOne({ code: req.params.code });

        if (pays) {
            res.send(pays.name);
            console.log(pays.name);
        } else {
            res.status(404).send("Pays non trouvée");
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export default {
    getPays,
    getAllPays
};

//const createPays
//const deletePays
//const updatePays


