import axios from "axios";

class Api {
  constructor(){
    this.server = axios.create({
      baseURL: "http://localhost:4000",
    });
  }

  listarPlayers = async () => {
    try {
      const response = await this.server.get('/players');
      return response.data;
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw error;
    }
  };

  CriarPlayer = async ({name, password, balance, team}) =>{
    try {
      const response = await this.server.post('/player', {name, password, balance, team});
      return response.data
    } catch (error) {
      throw error.response.data.Error
    }
  }

  deletarTodosPlayers = async ()=>{
    try {
      const response = await this.server.delete('/deleteAllPlayers')
      return response.data
    } catch (error) {
      throw error
    }
  }
}

export default Api
