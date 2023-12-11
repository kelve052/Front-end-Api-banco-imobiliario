import mongoose from "mongoose";

export const connectDB = (url)=>{
  try {
    return mongoose.connect(url, {}).then((conn)=>{
      return conn.connection
    })
  } catch (error) {
    console.log('erro ao connectar o moongoDb')
  }
}