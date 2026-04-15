"use strict";

import mongoose from "mongoose";

const url = "mongodb://localhost:27017";

const db = () => {
    mongoose
        .connect(url + "/paysAngularNode")
        .then(() => {
            console.log("Connecté à MongoDB");
        })
        .catch((error) => {
            console.log("Pas connecté :", error);
        });
}

export default db;