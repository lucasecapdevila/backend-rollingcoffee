import express from 'express'
import 'dotenv/config'  //  Permite procesar variables de entorno (.env)
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import productosRouter from './src/routes/productos.routes.js'
import usersRouter from './src/routes/users.routes.js'
import './src/database/db.js'

//*  1) Configurar un puerto
const app = express()   //  Generalmente se llama app, pero puede llevar cualquier nombre
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), () => {
  console.log('Consoleado desde el puerto ' + app.get('port'));
})

//*  2) Configurar los middlewares
app.use(cors())    //  Permite obtener conexiones remotas
app.use(morgan('dev'))   //  Nos da info extra en la terminal
app.use(express.json())   //  Permite interpretar los datos en formato .json
app.use(express.urlencoded({extended: true}))   //  Interpreta datos del body del request
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// console.log(__filename);
// console.log(path.join(__dirname, '/public'));


app.use(express.static(path.join(__dirname,'/public')))

//*  3) Configurar las rutas
//  http://localhost:3000/productos   => la usabamos en json-server
//  http://localhost:4001/   => la usamos en Postman
app.use('/api', productosRouter)
app.use('/api', usersRouter)


// app.get('/nuevo', (req, res) => {
//   //  Agregar lógica que debería hacer el Backend
//   console.log('Procesando la solicitud Get');
//   res.send('Respuesta del backend RollingCoffee')
// })