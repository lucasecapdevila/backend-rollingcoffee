import express from 'express'
import 'dotenv/config'  //  Permite procesar variables de entorno (.env)
import cors from 'cors'
import morgan from 'morgan'

//  1) Configurar un puerto
const app = express()   //  Generalmente se llama app, pero puede llevar cualquier nombre
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), () => {
  console.log('Consoleado desde el puerto ' + app.get('port'));
})

//  2) Configurar los middlewares
app.use(cors())    //  Permite obtener conexiones remotas
app.use(morgan('dev'))   //  Nos da info extra en la terminal
//  Agregar middlewares faltantes

//  3) Configurar las rutas
//  http://localhost:3000/productos   la usabamos en json-server
app.get('/', (req, res) => {
  //  Agregar lógica que debería hacer el Backend
  console.log('Procesando la solicitud Get');
  res.send('Respuesta del backend RollingCoffee')
})