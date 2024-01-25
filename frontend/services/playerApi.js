import axios from "axios";

class Api {
  constructor(){
    this.server = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL
    });
  }

  listarPlayers = async () => {
    try {
      const response = await this.server.get('/players');
      return response.data;
    } catch (error) {
      console.error('Erro ao listar usuário:', error);
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

  editarPlayer = async (id, name, password, balance, team)=>{
    try {
      const response = await this.server.put(`/player/${id}`, {name, team, balance, password})
      return response.data
    } catch (error) {
      throw error.response.data.Error
    }
  }
  deletarPlayer = async (id)=>{
    try {
      const response = await this.server.delete(`/player/${id}`)
      return response
    } catch (error) {
      throw error
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
