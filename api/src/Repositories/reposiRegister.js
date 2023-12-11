import modelPlayers from "../model/model.js";
import modelBank from "../model/modelBank.js";
import modelRegister from "../model/modelRegister.js";

class UserReposiRegister{
  async getRegister(){
    try {
      const get = await modelRegister.find()
      return get
    } catch (error) {
      throw error;
    }
  }

  async PostRegister(body){
    try {
      const playerWhoSent = await modelPlayers.findOne({name: body.playerWhoSent})
      const playerWhoReceived = await modelPlayers.findOne({name: body.playerWhoReceived})

      const playerWhoSentIsBank = await modelBank.findOne({name: body.playerWhoSent})
      const playerWhoReceivedIsBank = await modelBank.findOne({name: body.playerWhoReceived})

      if(playerWhoSent && playerWhoReceived){ // check if is players
        playerWhoSent.balancer = playerWhoSent.balancer - body.balanceValue
        if(playerWhoSent.balancer < 0 || body.balanceValue < 0){  // validade balance
          throw new Error("Insufficient balance in playerWhosent")
        }
        playerWhoSent.save()
        playerWhoReceived.balancer = playerWhoReceived.balancer + body.balanceValue
        playerWhoReceived.save()
        const createRegister = await modelRegister.create(body)
        return createRegister

      }else if (playerWhoSent && playerWhoReceivedIsBank){ //check if is player and bank
        playerWhoSent.balancer = playerWhoSent.balancer - body.balanceValue
        if(playerWhoSent.balancer < 0 || body.balanceValue < 0){  // validade balance
          throw new Error("Insufficient balance in playerWhosent")
        }
        playerWhoSent.save()
        playerWhoReceivedIsBank.balancer = playerWhoReceivedIsBank.balancer + body.balanceValue
        playerWhoReceivedIsBank.save()
        const createRegister = await modelRegister.create(body)
        return createRegister

      }else if(playerWhoReceived && playerWhoSentIsBank){ //check if is reverse player and bank
        playerWhoSentIsBank.balancer = playerWhoSentIsBank.balancer - body.balanceValue
        if(playerWhoSentIsBank.balancer < 0 || body.balanceValue < 0){  // validade balance
          throw new Error("Insufficient balance in playerWhosent")
        }
        playerWhoSentIsBank.save()
        playerWhoReceived.balancer = playerWhoReceived.balancer + body.balanceValue
        playerWhoReceived.save()
        const createRegister = await modelRegister.create(body)
        return createRegister
      }else{
        throw new Error("playerWhoSent or playerWhoReceived cannot exits and are not banks")
      }
    } catch (error) {
      throw error;
    }
  }
  async deleteRegister(){
    try {
      const deleteRegisters = await modelRegister.deleteMany()
      return deleteRegisters
    } catch (error) {
      throw error;
    }
  }
}


 
export default UserReposiRegister