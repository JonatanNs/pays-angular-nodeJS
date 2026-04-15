import mongoose from "mongoose";

const Pays = mongoose.model("Pays", {
    name: String,
    code: String,
    uuid: String
});

export default Pays;