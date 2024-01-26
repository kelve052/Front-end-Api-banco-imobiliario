import UserReposytorieAuth from "../repositories/reposiAuth.js";

class ServicesAuth {
  async servValidadeCredentials (name, password){
    try {
      const player = await new UserReposytorieAuth().validateNamePlayer(name)
      await new UserReposytorieAuth().validadePasswordPlayer(player, password)
    } catch (error) {
      throw error
    }
  }
}

export default ServicesAuth