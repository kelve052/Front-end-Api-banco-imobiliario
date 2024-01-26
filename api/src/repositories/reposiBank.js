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
  async repositorieUniqueBanck (){
    const dataBaseBank = await modelBank.find()
    if(dataBaseBank.length > 0){
      throw new Error('Deve existir apenas um banco no sitema!')
    }
  }
  async repositoriePostBank (body){
    try {
      const nameBankExist = await modelBank.findOne({name: body.name})
      if(nameBankExist){
        throw new Error(`O Nome: ${nameBankExist.name} já pertence a outro banco!`)
      }
      if(body.balance < 0){
        throw new Error("O saldo minimo é 0!")
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
        throw new Error("ID inserido não exite!")
      }
      const nameBankExits = await modelBank.findOne({name: body.name})
      if(nameBankExits){
        if(bank.name != body.name){
          throw new Error("O nome inserido pertence a outro banco!")
        }
      }
      if(body.balance < 0){
        throw new Error("O saldo não pode ser inferiopr a 0!")
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
        throw new Error("ID inserido não exite!")
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