import { Router } from "express";
import { listarProductos } from "../controllers/productos.controllers.js";

const productosRouter = Router()

//  Como crear las rutas
productosRouter.route('/productos').get(listarProductos)

export default productosRouter