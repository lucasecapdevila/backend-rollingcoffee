import { Router } from "express";
import { crearUsuario } from "../controllers/users.controllers.js";

const usersRouter = Router()

usersRouter.route('/usuarios').post(crearUsuario)

export default usersRouter