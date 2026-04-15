import mongoose from "mongoose";

const Pays = mongoose.model("Pays", {
    name: String,
    code: String
});

export default Pays;