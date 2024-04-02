import User from "../database/models/user.js";

export const crearUsuario = async(req, res) => {
  try {
    const {userEmail, password} = req.body
    //  Verificar si el mail ya existe en la DB
    const usuarioBuscado = await User.findOne({userEmail})
    if(usuarioBuscado){
      return res.status(400).json({
        mensaje: 'Este correo ya se encuentra registrado.'
      })
    }

    const nuevoUsuario = new User(req.body)
    nuevoUsuario.save()
    res.status(201).json({
      mensaje: 'El usuario fue creado exitosamente.',
      email: nuevoUsuario.userEmail,
      userName: nuevoUsuario.userName
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: 'El usuario no pudo ser creado.'
    })
  }
}

export const login = async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: 'Error al intentar loguear un usuario.',
    });
  }
};