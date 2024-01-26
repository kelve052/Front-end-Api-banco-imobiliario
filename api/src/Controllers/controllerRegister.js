import ServicesRegister from "../services/servicesRegister.js";

const servicesRegister = new ServicesRegister();

const getRegister = async (req, res) => {
  try {
    const get = await servicesRegister.ServicesGetRegister();
    res.status(200).json({ Registers: get });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

// -----------------------------------------------------------------------------
const postRegister = async (req, res) => {
  try {
    const {
      playerWhoSent,
      playerWhoReceived,
      balanceValue,
      teamPlayerWhoSent,
      teamPlayerWhoReceived,
    } = req.body;

    if (!playerWhoSent || !playerWhoReceived || !balanceValue) {
      throw new Error(
        "Campos obrigatórios vasios, escolha o jogador a enviar e a receber e o valor!"
      );
    }
    if (!teamPlayerWhoSent || !teamPlayerWhoReceived) {
      throw new Error(
        "Campos obrigatórios vasios, equipe dos jogadores"
      );
    }
    if(balanceValue == 0){
      throw new Error(
        "Saldo não poder ser 0"
      );
    }
    if (playerWhoSent == playerWhoReceived) {
      throw new Error("Jogador a enviar não pode ser igual a jogador a receber!");
    }
    
    const body = {
      playerWhoSent,
      playerWhoReceived,
      balanceValue,
      teamPlayerWhoSent,
      teamPlayerWhoReceived,
    };
    const newRegister = await servicesRegister.ServicesPostRegister(body);
    res
      .status(200)
      .json({ Msg: "Operação bem sucedida", RegsitePlayers: newRegister });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

// -------------------------------------------------------------------------------------------------

const deleteRegisterAll = async (req, res) => {
  try {
    await servicesRegister.servicesDeleteAll();
    res.status(201).json();
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

export { getRegister, postRegister, deleteRegisterAll };
