import UserService from "./user.service.js";
import {apiResponse} from "../dto/apiResponse.js";

const showLogin = async (req, res) =>{

}

const showRegister = async (req, res) =>{
    try{
        const existByUsername = await UserService.getUserByUsername(req.body.username);
        const existByEmail = await UserService.getUserByUsername(req.body.email);
        const newUser = await UserService.saveUser({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password
        })

        if(existByUsername){
            return res
                .status(409)
                .json(apiResponse(409, "Le pseudo existe déjà.", null))
        }
        if(existByEmail){
            return res
                .status(409)
                .json(apiResponse(409, "L'email existe déjà.", null))
        }

        if(newUser){
            return res
                .status(201)
                .json(apiResponse(201, "Profil créer avec succes!", newUser))
        } else{
            return res
                .status(400)
                .json(apiResponse(400, "Une erreur est survenue.", null))
        }

    } catch (err) {
        return res
            .status(500)
            .json(apiResponse(500, "Une erreur est survenu.", null));
    }
}

export default {
    showLogin,
    showRegister
};