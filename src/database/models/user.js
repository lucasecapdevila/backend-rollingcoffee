import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
  userMail: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 250,
    validator: (valor)=> {
      const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
      return pattern.test(valor)
    },
    message: dato => `${dato.value} no es una dirección de correo electrónico válida.`,
    unique: true
  },
  userPassword: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 20,
    validator: (valor)=> {
      const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
      return pattern.test(valor)
    },
    message: 'La contraseña debe tener al menos una letra mayúscula, una letra minúscula y un número.'
  }
})

const User = mongoose.model('user', userSchema)

export default User