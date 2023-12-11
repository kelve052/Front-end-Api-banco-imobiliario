import UserReepositoriePlayers from "../repositories/repositories.js";
import UserReposytorieAuth from "../repositories/reposiAuth.js";

const repositorio = new UserReepositoriePlayers()



class ServicesPlayers{
  async servicesGetPlayers(){
    return repositorio.repositorieGet()
  }
  async servicesPostPlayers(player){
    try {
      return await repositorio.repositoriePost(player)
    } catch (error) {
      throw error;
    }
  }
  async servicesPutPlayer(id, body){
   try {
    return await repositorio.repositoriePut(id, body)
   } catch (error) {
    throw error;
   }
  }
  async servicesDeletePlayers(id){
    try {
      await repositorio.repositorieDelete(id)
    } catch (error) {
      throw error;
    }
  }
  async servicesDeleteAllPlayers(){
    try {
      await repositorio.repositoiredeleteAllPlayers()
    } catch (error) {
      throw error;
    }
  }
}

export default ServicesPlayers