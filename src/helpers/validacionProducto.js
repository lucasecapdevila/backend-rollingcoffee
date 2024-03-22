import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionProducto = [
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
    }),
  check("imagen")
    .notEmpty()
    .withMessage('La imagen del producto es un dato obligatorio.')
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/)
    .withMessage('La imagen debe ser una URL válida y terminar con alguna de las siguientes extensiones: (jpg|jpeg|gif|png)'),
  check("categoria")
    .notEmpty()
    .withMessage('La categoría es un dato obligatorio.')
    .isIn(['Infusiones', 'Batidos', 'Dulce', 'Salado'])
    .withMessage('La categoría debe ser una de las siguientes opciones: Infusiones, Batidos, Dulce, Salado'),
  check("descripcionBreve")
    .notEmpty()
    .withMessage("La descripción breve del producto es un dato obligatorio.")
    .isLength({ min: 10, max: 80 })
    .withMessage("La descripción breve del producto debe contener entre 10 y 80 carácteres."),
  check("descripcionAmplia")
    .notEmpty()
    .withMessage("La descripción amplia del producto es un dato obligatorio.")
    .isLength({ min: 20, max: 500 })
    .withMessage("La descripción amplia del producto debe contener entre 20 y 500 carácteres."),
  (req, res, next) => resultadoValidacion(req, res, next)
]

export default validacionProducto