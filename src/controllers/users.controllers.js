import User from "../database/models/user.js";
import bcrypt from 'bcrypt'
import generarJWT from "../helpers/generarJWT.js";

export const crearUsuario = async(req, res) => {
  try {
    const {email, userPassword} = req.body
    //  Verificar si el mail ya existe en la DB
    const usuarioBuscado = await User.findOne({email})
    if(usuarioBuscado){
      return res.status(400).json({
        mensaje: 'Este correo ya se encuentra registrado.'
      })
    }

    const nuevoUsuario = new User(req.body)
    //  Genero un hash con bcrypt para ocultar la contraseña del usuario
    const salt = bcrypt.genSaltSync(10)
    nuevoUsuario.userPassword = bcrypt.hashSync(userPassword, salt)
    nuevoUsuario.save()
    res.status(201).json({
      mensaje: 'El usuario fue creado exitosamente.',
      email: nuevoUsuario.email,
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
    const {userMail, userPassword} = req.body
    //  Verificar si el mail ya existe en la DB
    const usuarioBuscado = await User.findOne({userMail})

    //  Preguntar si el mail no existe
    if(!usuarioBuscado){
      return res.status(400).json({
        mensaje: 'Correo o password incorrecto. Correo'
      })
    }

    //  Verificar el password
    const passwordValido = bcrypt.compareSync(userPassword, usuarioBuscado.userPassword)
    if(!passwordValido){
      return res.status(400).json({
        mensaje: 'Correo o password incorrecto. Password'
      })
    }

    //  Generar un token
    const token = await generarJWT(usuarioBuscado.userName, usuarioBuscado.userMail)

    res.status(200).json({
      mensaje: 'El usuario existe',
      userName: usuarioBuscado.userName,
      userMail: usuarioBuscado.userMail,
      token
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: 'Error al intentar loguear un usuario.',
    });
  }
}