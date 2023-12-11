import aplicacao from "./aplicacao.js";
import { connectDB } from "./database/db.js";

export const start = async () => {
  try {
    console.log('MONGO_URI:', process.env.MONGO_URI);
    await connectDB(process.env.MONGO_URI);
    const server = aplicacao.listen(4000, () => console.log('Server online on port 4000'));
  } catch (error) {
    console.log('Error connecting:', error);
  }
};