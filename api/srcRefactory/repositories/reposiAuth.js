import model from "../model/model.js";


class UserReposytorieAuth {
  async validateNamePlayer(name) {
    try {
      const namePlayer = await model.findOne({ name: name });
      if (!namePlayer) {
        throw new Error('Player informed not exist');
      }
      return namePlayer;
    } catch (error) {
      throw error;
    }
  }
  async validadePasswordPlayer(player, password){
    try {
      // const passwordPlayer = await model.findOne({password: password});
      if(player.password != password){
        throw new Error('password Incorret!')
      }
      return true
    } catch (error) {
      throw error
    }
  }
}


export default UserReposytorieAuth