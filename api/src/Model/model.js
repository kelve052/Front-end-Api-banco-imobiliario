import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid'

const modelPlayers = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  name: {
    type: String,
    required: [true, "Campo name esta vasio, insira um nome!"],
    unique: [true, 'Campo nome tem que ser unico ja existe um player co um nome existe!'],
    trim: true
  },
  team: {
    type: String,
    enum: ['Yellow', 'Blue', 'White', 'Black', 'Red', 'Green']
  },
  balance: {
    type: Number,
    default: 0
  },
  password: {
    type: String,
    minlength: [8, 'A senha deve conter no minimo 8 caracteres']
    // não esquessa de tertar pra ve se esta funcionado na hora de fazer o post do player
  }
})

export default mongoose.model('Player', modelPlayers);