import aplicacao from "./aplicacao.js";
import { connectDB } from "./database/db.js";

export const start = async () => {
  try {
    console.log('MONGO_URI:', process.env.MONGO_URI);
    const port = process.env.PORT || 4000
    await connectDB(process.env.MONGO_URI);
    const server = aplicacao.listen(port, () => console.log('Server online on port 4000'));
  } catch (error) {
    console.log('Error connecting:', error);
  }
};