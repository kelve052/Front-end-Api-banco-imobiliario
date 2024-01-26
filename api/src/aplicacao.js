import express from "express";
import dotenv from 'dotenv';
import router from './router/router.js';
import { start } from "./sever.js";
import cors from 'cors'

dotenv.config()

const aplicacao = express()
export  default aplicacao

aplicacao.use(cors('https://front-end-banco-imobiliario.vercel.app/'))
aplicacao.use(express.json())
aplicacao.get('/', (req, res)=>{
  res.json({teste: 'teste'}) 
})
aplicacao.use('/', router)


start()