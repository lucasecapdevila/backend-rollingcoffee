import { Router } from "express";
import {
  crearProducto,
  editarProducto,
  eliminarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers.js";
import validacionProducto from "../helpers/validacionProducto.js";

const productosRouter = Router();

//  Como crear las rutas
productosRouter
  .route("/productos")
  .get(listarProductos)
  .post([validacionProducto], crearProducto);
productosRouter
  .route("/productos/:id")
  .get(obtenerProducto)
  .put([validacionProducto],editarProducto)
  .delete(eliminarProducto);

export default productosRouter;
