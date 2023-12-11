import modelBank from "../model/modelBank.js"
import modelRegister from "../model/modelRegister.js";

class UserRepositoryBank{
  async repositorieGetBank (){
    try {
      return await modelBank.find()
    } catch (error) {
      throw error;
    }
  }
  async repositoriePostBank (body){
    try {
      const nameBankExist = await modelBank.findOne({name: body.name})
      if(nameBankExist){
        throw new Error(`Name: ${nameBankExist.name} already belongs to another bank!`)
      }
      if(body.balancer < 0){
        throw new Error("The balancer cannot be less than 0")
      }
      return await modelBank.create(body)
    } catch (error) {
      throw error;
    }
  }
  async repositoriePutBank (id, body){
    try {
      const bank = await modelBank.findById(id)
      if(!bank){
        throw new Error("id inserted cannot exits!")
      }
      const nameBankExits = await modelBank.findOne({name: body.name})
      if(nameBankExits){
        if(bank.name != body.name){
          throw new Error("Name inserted already belong to another bank!")
        }
      }
      if(body.balancer < 0){
        throw new Error("the balancer cannot be less than 0!")
      }
      if(body.name != bank.name){
        await modelRegister.updateMany({playerWhoSent: bank.name},  {playerWhoSent: body.name})
        await modelRegister.updateMany({playerWhoReceived: bank.name}, {playerWhoReceived: body.name})
        return await modelBank.findByIdAndUpdate(id, body, {new: true})
      }else{
        return await modelBank.findByIdAndUpdate(id, body, {new: true})
      }
    } catch (error) {
      throw error;
    }
  }
  async repositorieDeleteBank(id){
    try {
      const bank = await modelBank.findById(id)
      if(!bank){
        throw new Error("id inserted cannot exits!")
      }
      await modelBank.findByIdAndDelete(id)
    } catch (error) {
      throw error;
    }
  }
  async repositorieDeleteBankAll(){
    await modelBank.deleteMany()
  }
}

export default UserRepositoryBank;