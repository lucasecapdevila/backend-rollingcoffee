import Producto from "../database/models/producto.js";

//  Traer el array de productos de la DB
export const listarProductos = async(req, res) => {
  try {
    const listaProductos = await Producto.find()
    res.status(200).json(listaProductos)
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Error al buscar los productos'})
  }
}

//  Traer UN producto de la DB
export const obtenerProducto = async(req, res) => {
  try {
    //  Extraer el ID
    console.log(req.params.id);
    //  Solicitar a la DB buscar el producto con la ID buscada
    const productoBuscado = await Producto.findById(req.params.id)
    //  Preguntar si no encontré el producto
    if(!productoBuscado){
      return res.status(404).json({mensaje: 'El producto con el ID enviado no existe.'})
    }
    //  Enviar respuesta
    res.status(200).json(productoBuscado)
  } catch (error) {
    console.error(error);
    res.status(400).json({mensaje: 'No se pudo encontrar el producto solicitado.'})
  }
}

//  Agregar un nuevo producto a la DB
export const crearProducto = async(req, res) => {
  try {
    //  Extraer los datos del body
    console.log(req);
    console.log(req.body);
    //  todo: validar los datos del body
    //  Pedir a la DB crear el producto
    const productoNuevo = new Producto(req.body)
    await productoNuevo.save()
    //  Responder al frontend (éxito o error)
    res.status(201).json({
      mensaje: 'El producto fue creado exitosamente.'
    })
  } catch (error) {
    console.error(error);
    res.status(400).json({
      mensaje: 'El producto no pudo ser creado'
    })
  }
}