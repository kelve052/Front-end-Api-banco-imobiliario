import ServicesPlayers from "../services/servicesPlayer.js";
const services = new ServicesPlayers();

const playersGet = async (req, res) => {
  try {
    const get = await services.servicesGetPlayers();
    res.status(200).json({ Players: get });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
//-----------------------------------------------------------------------------------------------------
const playersPost = async (req, res) => {
  try {
    let { name, team, balance, password } = req.body;
    if (!Number(balance)) {
      if (balance == null || balance == 0) {
        balance = 0;
      } else {
        throw new Error("valor saldo incompativel!");
      }
    }
    if (!name || !team || !password) {
      throw new Error("Campos obrigatórios vasios, nome, senha e equipe!");
    }
    if (name.startsWith("$B")) {
      throw new Error("Name cannot start whith $B");
    }
    if (password.length < 8) {
      throw new Error("A senha deve ter no minimo 8 caracteres!");
    }
    const regex = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    const passwordregex = regex.test(password);
    if (!passwordregex) {
      throw new Error(
        "A senha deve conter simbolo, letra maíuscula e um numero!"
      );
    }
    const body = { name, team, password, balance };
    const newPlayer = await services.servicesPostPlayers(body);
    res.status(200).json(newPlayer);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
//-----------------------------------------------------------------------------------------------------

const playerUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    let { name, team, balance, password } = req.body;
    if (!name || !team || !balance || !password) {
      throw new Error(
        "Campos obrigatórios vasios, nome, senha, saldo e equipe!"
      );
    }
    if (!Number(balance)) {
      if (balance == null || balance == 0) {
        balance = 0;
      } else {
        throw new Error("valor saldo incompativel!");
      }
    }
    if (name.startsWith("$B")) {
      throw new Error("o nome não pode iniciar com: $B");
    }
    if (password.length < 8) {
      throw new Error("A senha deve ter no minimo 8 caracteres!");
    }
    const regex = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    const passwordregex = regex.test(password);
    if (!passwordregex) {
      throw new Error("A senha deve conter simbolo!");
    }
    if (
      team != "Yellow" &&
      team != "Blue" &&
      team != "White" &&
      team != "Black" &&
      team != "Red" &&
      team != "Green"
    ) {
      throw new Error(
        "value of team invalid, required: Yellow or Blue or White or Black or Red or Green"
      );
    }
    const body = { name, team, balance, password };
    const newPlayer = await services.servicesPutPlayer(id, body);
    res.status(200).json({ Player: newPlayer });
  } catch (error) {
    console.log(error);
    res.status(400).json({ Error: error.message });
  }
};
//-----------------------------------------------------------------------------------------------------

const PlayerDelete = async (req, res) => {
  try {
    const id = req.params.id;
    await services.servicesDeletePlayers(id);
    res.status(201).json();
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
//-----------------------------------------------------------------------------------------------------

const deleteAllPlayers = async (req, res) => {
  try {
    await services.servicesDeleteAllPlayers();
    res.status(201).json();
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

export {
  playersGet,
  playersPost,
  playerUpdate,
  PlayerDelete,
  deleteAllPlayers,
};
