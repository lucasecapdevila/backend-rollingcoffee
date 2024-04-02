import { Router } from "express";
import {
  crearProducto,
  editarProducto,
  eliminarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers.js";
import validacionProducto from "../helpers/validacionProducto.js";
import validarJWT from "../helpers/validarJWT.js";

const productosRouter = Router();

//  Como crear las rutas
productosRouter
  .route("/productos")
  .get(listarProductos)
  .post([validarJWT, validacionProducto], crearProducto);
productosRouter
  .route("/productos/:id")
  .get(obtenerProducto)
  .put([validarJWT, validacionProducto],editarProducto)
  .delete(validarJWT, eliminarProducto);

export default productosRouter;
