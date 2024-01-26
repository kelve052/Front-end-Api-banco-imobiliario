import express from "express";
import {playersGet, playersPost, playerUpdate, PlayerDelete, deleteAllPlayers} from "../controllers/controllersPlayers.js";
import auth from "../Controllers/contollerAuth.js";
import authentication from "../middleware/authentication.js";
import { getRegister, postRegister, deleteRegisterAll} from "../Controllers/controllerRegister.js";
import { getBank, postBank, putBank, deleteBank, deleteBankAll} from "../Controllers/constrollerBank.js";

const router = express.Router()

router.route("/").get((req, res)=>{res.json({Msg: "Seja Bem vindo"})})
router.route("/players").get(authentication, playersGet)
router.route("/player").post(playersPost)
router.route("/player/:id").put(authentication, playerUpdate).delete(authentication, PlayerDelete)
router.route("/deleteAllPlayers").delete(authentication, deleteAllPlayers)

router.route("/banks").get(authentication ,getBank)
router.route("/bank").post(authentication, postBank)
router.route("/bank/:id").put(authentication,putBank).delete(authentication, deleteBank)
router.route("/banksDeleteAll").delete(authentication, deleteBankAll)

router.route("/register").get(authentication, getRegister)
router.route("/register").post(authentication, postRegister)
router.route("/register").delete(authentication, deleteRegisterAll)

router.route("/auth").post(auth)

export default router;