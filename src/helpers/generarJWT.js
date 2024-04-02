import jwt  from "jsonwebtoken";
import 'dotenv/config';

const generarJWT = async (userName, email)=>{
  try {
    const payload = { userName, email };
    const token = await jwt.sign(payload, process.env.SECRET_JWT, {
        expiresIn: '3h' // si lo dejamos con null el token no expira
    });
    return token;
  } catch (error) {
    console.error('Error al generar el token:', error.message);
    throw new Error('No se pudo generar el token');
  }
}
export default generarJWT