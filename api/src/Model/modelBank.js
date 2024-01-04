import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid'

const modelBank = new mongoose.Schema({
  _id: {
    type:  String,
    default: uuidv4
  },
  name: {
    type: String,
    default: "$B: Bank-Dlatles"
  },
  balance:{
    type: Number,
    default: 0
  }
})

export default mongoose.model("Bank", modelBank);