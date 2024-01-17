import ServicesBank from "../services/servicesBank.js";

const servicesBank = new ServicesBank()

const getBank = async (req, res)=>{
  try {
    const bank = await servicesBank.servicesBankGet()
    res.status(200).json({Bank: bank})
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}

//-----------------------------------------------------------------------------------------------------

const postBank = async(req, res)=>{
  try {
    await servicesBank.servicesUniqueBanck() //caso queira ter maias de uma banco no sistema remova essa linha
    let {name,  balance} = req.body
    if(!name || !balance && balance != 0){
      throw new Error("Campos obrigatórios vasios, nome e saldo!")
    }
    if(!Number(balance)){
      if(balance == null || balance == 0){
        balance = 0
       }else{
        throw new Error('valor saldo incompativel!')
       }
     }
    name = `$B: ${name}`
    const body = {name,  balance}
    const post = await servicesBank.servicesBankPost(body)
    res.status(200).json({Bank: post})
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}
//-----------------------------------------------------------------------------------------------------
const putBank = async (req, res)=>{
  try {
    const id = req.params.id
    let {name, balance} = req.body
    if(!name || !balance){
      throw new Error("Campos obrigatórios vasios, nome e saldo!")
    }
    if(!Number(balance)){
      if(balance == null || balance == 0){
        balance = 0
       }else{
        throw new Error('valor saldo incompativel!')
       }
     }
    name = `$B: ${name}`
    const body = {name,  balance}
    const newBank = await servicesBank.servicesBankPut(id, body)
    res.status(200).json({Bank: newBank})
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}
//-----------------------------------------------------------------------------------------------------

const deleteBank = async (req, res)=>{
  try {
    const id = req.params.id
    await servicesBank.servicesDelete(id)
    res.status(201).json()
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}
//-----------------------------------------------------------------------------------------------------

const deleteBankAll = async (req, res)=>{
  try {
    await servicesBank.servicesDeleteAll()
    res.status(201).json()
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}

export {getBank, postBank, putBank, deleteBank, deleteBankAll}