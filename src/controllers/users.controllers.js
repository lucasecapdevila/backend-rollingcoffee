import User from "../database/models/user.js";
import bcrypt from 'bcrypt'

export const crearUsuario = async(req, res) => {
  try {
    const {userMail, userPassword} = req.body
    //  Verificar si el mail ya existe en la DB
    const usuarioBuscado = await User.findOne({userMail})
    if(usuarioBuscado){
      return res.status(400).json({
        mensaje: 'Este correo ya se encuentra registrado.'
      })
    }

    const nuevoUsuario = new User(req.body)
    //  Genero un hash con bcrypt para ocultar la contraseña del usuario
    const salt = bcrypt.genSaltSync(10)
    nuevoUsuario.password = bcrypt.hashSync(userPassword, salt)
    nuevoUsuario.save()
    res.status(201).json({
      mensaje: 'El usuario fue creado exitosamente.',
      email: nuevoUsuario.userMail,
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
}