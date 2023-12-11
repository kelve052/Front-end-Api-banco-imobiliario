import UserRepositoryBank from "../repositories/reposiBank.js";

const repositoryeBank = new UserRepositoryBank()

class ServicesBank{
  async servicesBankGet(){
    try {
      return await repositoryeBank.repositorieGetBank()
    } catch (error) {
      throw error;
    }
  }
  async servicesBankPost (body){
    try {
      return await repositoryeBank.repositoriePostBank(body)
    } catch (error) {
      throw error;
    }
  }
  async servicesBankPut (id, body){
    try {
      return await repositoryeBank.repositoriePutBank(id, body)
    } catch (error) {
      throw error;
    }
  }
  async servicesDelete(id){
    try {
      return await repositoryeBank.repositorieDeleteBank(id)
    } catch (error) {
      throw error;
    }
  }
  async servicesDeleteAll(){
    try {
      await repositoryeBank.repositorieDeleteBankAll()
    } catch (error) {
      throw error;
    }
  }
}

export default ServicesBank;