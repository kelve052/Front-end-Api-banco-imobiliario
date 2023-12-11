import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid'

const modelRegister = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  playerWhoSent: {
    type: String,
  },
  playerWhoReceived: {
    type: String
  },
  balanceValue: {
    type: Number
  }
})

export default mongoose.model("Register", modelRegister)