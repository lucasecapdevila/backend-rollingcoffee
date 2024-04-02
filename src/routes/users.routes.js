import { Router } from "express";
import { crearUsuario, login } from "../controllers/users.controllers.js";

const usersRouter = Router()

usersRouter.route('/registrar').post(crearUsuario)
usersRouter.route('/').get(login)

export default usersRouter