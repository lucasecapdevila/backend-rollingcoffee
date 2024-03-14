import Producto from "../database/models/producto.js";

export const listarProductos = async(req, res) => {
  try {
    const listaProductos = await Producto.find()
    res.status(200).json(listaProductos)
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: 'Error al buscar los productos'})
  }
}

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