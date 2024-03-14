import { Router } from "express";
import { crearProducto, editarProducto, listarProductos, obtenerProducto } from "../controllers/productos.controllers.js";

const productosRouter = Router()

//  Como crear las rutas
productosRouter.route('/productos').get(listarProductos).post(crearProducto)
productosRouter.route('/productos/:id').get(obtenerProducto).put(editarProducto)

export default productosRouter