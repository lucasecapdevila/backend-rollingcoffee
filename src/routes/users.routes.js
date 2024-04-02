import { Router } from "express";
import { crearUsuario, login } from "../controllers/users.controllers.js";

const usersRouter = Router()

usersRouter.route('/registrar').post(crearUsuario)
usersRouter.route('/').post(login)

export default usersRouter