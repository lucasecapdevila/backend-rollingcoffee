import { validationResult } from "express-validator";

const resultadoValidacion = (req, res, next) => {
  //  Validar los datos del body:
  const errors = validationResult(req)

  //  Preguntar si hubieron errores
  if(!errors.isEmpty()){
    return res.status(400).json({
      errores: errors.array()
    })
  }

  //  Continuar con la siguiente instrucción
  next()
}

export default resultadoValidacion