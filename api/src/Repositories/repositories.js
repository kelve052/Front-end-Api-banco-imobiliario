import modelPlayers from "../model/model.js";
import modelRegister from "../model/modelRegister.js";

class UserReepositoriePlayers {
  async repositorieGet(){
    const get = await modelPlayers.find();
    return get
  }
  async repositoriePost(player){
    try {
      const post = await modelPlayers.create(player)
      return post
    } catch (error) {
      throw new Error("the name entered already exists, choose another!");
    }
  }
  async repositoriePut(id, body){
    try {
      const  {name} = body
      const Player = await modelPlayers.findById(id)
      if(!Player){
        throw new Error("id entered does not exist!")
      }
      if(Player.name == name){
        const newPlayer = await modelPlayers.findByIdAndUpdate(id, body, { new: true });
        return newPlayer;
      }else{
        const existPlayer  = await modelPlayers.findOne({name: name})
        if(existPlayer){
          throw new Error("Name already belongs to player!")
        }
        await modelRegister.updateMany({playerWhoSent: Player.name},  {playerWhoSent: body.name})
        await modelRegister.updateMany({playerWhoReceived: Player.name}, {playerWhoReceived: body.name})
        const newPlayer = await modelPlayers.findByIdAndUpdate(id, body, { new: true });
        return newPlayer;
      }
    } catch (error) {
      throw error
    }
  }
  async repositorieDelete(id){
    try {
      const Player = await modelPlayers.findById(id)
      if(!Player){
        throw new Error("id entered does not exist!")
      }
      await modelPlayers.findByIdAndDelete(id)
    } catch (error) {
      throw error
    }
  }
  async repositoiredeleteAllPlayers(){
    try {
      await modelPlayers.deleteMany()
      return;
    } catch (error) {
      throw error;
    }
  }
}

export default UserReepositoriePlayers