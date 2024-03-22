import { Router } from "express";
import {
  crearProducto,
  editarProducto,
  eliminarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers.js";
import { check } from "express-validator";

const productosRouter = Router();

//  Como crear las rutas
productosRouter
  .route("/productos")
  .get(listarProductos)
  .post(
    [
      check("nombreProducto")
        .notEmpty()
        .withMessage("El nombre del producto es un dato obligatorio.")
        .isLength({ min: 2, max: 50 })
        .withMessage("El nombre del producto debe contener entre 2 y 50 carácteres."),
      check("precio")
        .notEmpty()
        .withMessage("El precio es un dato obligatorio.")
        .isNumeric()
        .withMessage('El precio debe ser un número.')
        .custom((value) => {
          if(value >= 50 && value <= 10000){
            return true
          } else{
            throw new Error('El precio debe estar entre $50 y $10.000')
          }
        })
    ],
    crearProducto
  );
productosRouter
  .route("/productos/:id")
  .get(obtenerProducto)
  .put(editarProducto)
  .delete(eliminarProducto);

export default productosRouter;
