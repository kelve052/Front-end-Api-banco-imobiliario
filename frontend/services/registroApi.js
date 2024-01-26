import axios from "axios";

class RegistroApi {
  constructor() {
    this.server = axios.create({
      baseURL: "https://api-banco-imobiliario-tawny.vercel.app/"
    });
  }

  async listarRegistros() {
    try {
      const response = await this.server.get("/register");
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async criarRegistro(
    playerWhoSent,
    playerWhoReceived,
    balanceValue,
    teamPlayerWhoSent,
    teamPlayerWhoReceived
  ) {
    try {
      const response = await this.server.post("/register", {
        playerWhoSent,
        teamPlayerWhoSent,
        playerWhoReceived,
        teamPlayerWhoReceived,
        balanceValue,
      });
      return response.data;
    } catch (error) {
      throw error.response.data.Error;
    }
  }
}

export default RegistroApi;
