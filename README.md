# 🍵 RollingCoffee - Backend

Backend para aplicación de cafetería desarrollado con Node.js, Express y MongoDB.

## 📋 Descripción

RollingCoffee es una API REST para gestionar los productos y usuarios de una cafetería. Permite realizar operaciones CRUD sobre productos, autenticación de usuarios y autorización mediante JWT.

## 🚀 Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **JWT** - Autenticación y autorización
- **Bcrypt** - Encriptación de contraseñas
- **Express Validator** - Validación de datos
- **CORS** - Manejo de políticas de origen cruzado
- **Morgan** - Logging de peticiones HTTP
- **Dotenv** - Gestión de variables de entorno

## 📁 Estructura del Proyecto

```
proyecto13-backend-Cafeteria/
├── src/
│   ├── controllers/
│   │   ├── productos.controllers.js
│   │   └── users.controllers.js
│   ├── database/
│   │   ├── db.js
│   │   └── models/
│   │       ├── producto.js
│   │       └── user.js
│   ├── helpers/
│   │   ├── generarJWT.js
│   │   ├── resultadoValidacion.js
│   │   ├── validacionProducto.js
│   │   └── validarJWT.js
│   └── routes/
│       ├── productos.routes.js
│       └── users.routes.js
├── public/
│   └── index.html
├── index.js
├── package.json
└── vercel.json
```

## ⚙️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd proyecto13-backend-Cafeteria
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   
   Crear un archivo `.env` en la raíz del proyecto:
   ```env
   MONGODB_URI=tu_conexion_mongodb
   SECRET_JWT=tu_clave_secreta_jwt
   PORT=4000
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

5. **Ejecutar en producción**
   ```bash
   npm start
   ```

## 🗃️ Modelos de Datos

### Producto
```javascript
{
  nombreProducto: String,    // 2-50 caracteres, único
  precio: Number,           // $50 - $10,000
  imagen: String,           // URL válida de imagen
  categoria: String,        // 'Infusiones', 'Batidos', 'Dulce', 'Salado'
  descripcionBreve: String, // 10-80 caracteres
  descripcionAmplia: String // 20-500 caracteres
}
```

### Usuario
```javascript
{
  userMail: String,     // Email válido, único
  userPassword: String, // Contraseña encriptada
  userRole: String,     // Rol del usuario
  userName: String      // 4-15 caracteres, único
}
```

## 🛣️ Endpoints de la API

### Productos

| Método | Endpoint | Descripción | Autenticación |
|--------|----------|-------------|---------------|
| GET | `/api/productos` | Obtener todos los productos | No |
| GET | `/api/productos/:id` | Obtener un producto por ID | No |
| POST | `/api/productos` | Crear un nuevo producto | No |
| PUT | `/api/productos/:id` | Actualizar un producto | No |
| DELETE | `/api/productos/:id` | Eliminar un producto | No |

### Usuarios

| Método | Endpoint | Descripción | Autenticación |
|--------|----------|-------------|---------------|
| POST | `/api/usuario/registrar` | Registrar nuevo usuario | No |
| POST | `/api/usuario/` | Iniciar sesión | No |

## 🔐 Autenticación

**Todos los endpoints son públicos** - No se requiere autenticación para ninguna operación.

> **Nota**: El proyecto incluye funcionalidades de JWT (registro e inicio de sesión) pero actualmente todos los endpoints están configurados como públicos. Los archivos relacionados con JWT se mantienen disponibles para uso futuro.

## 📝 Ejemplos de Uso

### Crear un Producto
```bash
POST /api/productos
Content-Type: application/json

{
  "nombreProducto": "Café Americano",
  "precio": 250,
  "imagen": "https://ejemplo.com/imagen.jpg",
  "categoria": "Infusiones",
  "descripcionBreve": "Café negro tradicional",
  "descripcionAmplia": "Delicioso café americano preparado con granos seleccionados..."
}
```

### Registrar Usuario
```bash
POST /api/usuario/registrar
Content-Type: application/json

{
  "userMail": "usuario@ejemplo.com",
  "userPassword": "password123",
  "userRole": "admin",
  "userName": "usuario123"
}
```

### Iniciar Sesión
```bash
POST /api/usuario/
Content-Type: application/json

{
  "userMail": "usuario@ejemplo.com",
  "userPassword": "password123"
}
```

## ✅ Validaciones

### Productos
- **Nombre**: 2-50 caracteres, único
- **Precio**: Entre $50 y $10,000
- **Imagen**: URL válida terminada en .jpg, .jpeg, .gif o .png
- **Categoría**: Debe ser una de: Infusiones, Batidos, Dulce, Salado
- **Descripción breve**: 10-80 caracteres
- **Descripción amplia**: 20-500 caracteres

### Usuarios
- **Email**: Formato de email válido, único
- **Contraseña**: Requerida (se encripta automáticamente)
- **Nombre de usuario**: 4-15 caracteres, único

## 🚀 Despliegue

El proyecto está configurado para desplegarse en **Vercel**. El archivo `vercel.json` contiene la configuración necesaria.

Para desplegar:
1. Conectar el repositorio con Vercel
2. Configurar las variables de entorno en Vercel
3. Desplegar automáticamente

## 🛠️ Scripts Disponibles

- `npm start` - Ejecutar en producción
- `npm run dev` - Ejecutar en desarrollo con nodemon

## 📊 Estado de Respuestas

- **200** - Éxito
- **201** - Recurso creado exitosamente
- **400** - Error en la petición (validación, datos incorrectos)
- **401** - No autorizado (token inválido o expirado)
- **404** - Recurso no encontrado
- **500** - Error interno del servidor

## 👨‍💻 Autor

**Capdevila Lucas**

## 📄 Licencia

ISC

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes, por favor abre un issue primero para discutir los cambios propuestos.

## 📞 Soporte

Si tienes alguna pregunta o problema, no dudes en crear un issue en el repositorio.
