import Jwt from "jsonwebtoken";
import ServicesAuth from "../services/servicesAuth.js"

const auth = async (req, res)=>{
  try {
    const {name, password} = req.body
    await new ServicesAuth().servValidadeCredentials(name, password)
    const token = Jwt.sign({name, password}, process.env.JWT_SECRET, {expiresIn: '30d'})
    res.json({Acess_token: token})
  } catch (error) {
    res.json({Error: error.message})
  }
}

export default auth