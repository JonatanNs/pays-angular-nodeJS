import Pays from "./pays.model.js";

const findAllPays = async () => {
    return Pays.find();
};

const findByCode = async (code) => {
    return Pays.findOne({ code });
};

const savePays = async (pays) => {
    return Pays.create(pays);
};

const deletePays = async (uuid) => {
    return Pays.deleteOne({ uuid });
};

const updatePays = async (uuid, pays) => {
    return Pays.findOneAndUpdate(
        { uuid },
        pays,
        { new: true }
    );
};

export default {
    findAllPays,
    findByCode,
    savePays,
    deletePays,
    updatePays
};