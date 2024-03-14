import { Router } from "express";
import { crearProducto, listarProductos } from "../controllers/productos.controllers.js";

const productosRouter = Router()

//  Como crear las rutas
productosRouter.route('/productos').get(listarProductos).post(crearProducto)

export default productosRouter