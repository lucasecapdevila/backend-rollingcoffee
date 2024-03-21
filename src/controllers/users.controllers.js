import User from "../database/models/user";

export const crearUsuario = async(req, res) => {
  try {
    //todo: VALIDAR LOS DATOS DEL BODY
    const nuevoUsuario = new User(req.body)
    await nuevoUsuario.save()
    res.status(201).json({
      mensaje: 'El usuario fue creado exitosamente.'
    })
  } catch (error) {
    console.error(error);
    res.status(400).json({
      mensaje: 'El usuario no pudo ser creado.'
    })
  }
}