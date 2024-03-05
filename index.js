import express from 'express'

//  1) Configurar un puerto
const app = express()   //  Generalmente se llama app, pero puede llevar cualquier nombre
app.set('port', process.env.PORT || 4000)
app.listen(app.get('port'), () => {
  console.log('Consoleado desde el puerto ' + app.get('port'));
})

//  2) Configurar los middlewares

//  3) Configurar las rutas