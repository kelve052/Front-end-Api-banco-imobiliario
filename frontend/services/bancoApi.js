import axios from "axios";

class ApiBanco{
  constructor(){
    this.server = axios.create({
      baseURL:  "https://api-banco-imobiliario-tawny.vercel.app/"
    })
  }
  listarBancos = async ()=>{
    try {
      const response = await this.server.get('/banks')
      return response.data
    } catch (error) {
      throw error
    }
  }

  criarBanco = async (name, balance)=>{
    try {
      const response = await this.server.post('/bank', {name, balance})
      return response.data
    } catch (error) {
      throw error.response.data.Error
    }
  }

  editarBanco = async (id, name, balance)=>{
    try {
      const response = await this.server.put(`/bank/${id}`, {name, balance})
      return response.data
    } catch (error) {
      throw error.response.data.Error
    }
  }
  deletarBanco = async (id)=>{
    try {
      const response = await this.server.delete(`/bank/${id}`)
      return response
    } catch (error) {
      throw error
    }
  }
}

export default ApiBanco