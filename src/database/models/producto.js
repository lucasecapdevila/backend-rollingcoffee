import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    unique: true
  },
  precio: {
    type: Number,
    required: true,
    min: 50,
    max: 10000
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (valor)=> {
        const pattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/
        return pattern.test(valor)
      },
      message: dato => `${dato.value} no es una URL de imágen válida.`
    }
  },
  categoria: {
    type: String,
    required: true,
    enum: ['Infusiones', 'Batidos', 'Dulce', 'Salado']
  },
  descripcionBreve: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 80
  },
  descripcionAmplia: {
    type: String,
    required: true,
    minLength: 20,
    maxLength: 500
  }
})

//  Crear el modelo del producto
const Producto = mongoose.model('producto', productoSchema)

export default Producto