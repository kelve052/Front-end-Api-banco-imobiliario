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
    let {name,  balancer} = req.body
    if(!name || !balancer){
      throw new Error("Body required: name and balancer")
    }
    name = `$B: ${name}`
    const body = {name,  balancer}
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
    let {name, balancer} = req.body
    if(!name || !balancer){
      throw new Error("Body required: name and balancer")
    }
    name = `$B: ${name}`
    const body = {name,  balancer}
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