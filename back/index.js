import express, {json} from "express";
import db from "./config/db.js";
import router from "./pays/pays.routes.js";
import {apiResponse} from "./dto/apiResponse.js";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db();

app.use("/api", router);

app.use((req, res, next) => {
    console.log(
        "method: ", req.method,
        " url:", req.url,
        " user-agent:", req.get("User-Agent"),
    );
    next();
});

app.use((req, res) => {
    res
        .status(404)
        .json(apiResponse(404,"Page non trouvée", null ));
});

app.listen(port, () => {
    console.log("L'API ecoute sur le port", port);
});

