import ServicesPlayers from "../services/servicesPlayer.js"
const services = new ServicesPlayers()

const playersGet = async (req, res)=>{
  try {
    const get = await services.servicesGetPlayers()
    res.status(200).json({Players: get})
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}
//-----------------------------------------------------------------------------------------------------
const playersPost = async (req, res)=>{
 try {
   const {name, team, password} = req.body
   const body = {name, team, password}
   if(!name || !team || !password){
     throw new Error("body incorret, name, team and password required!")
   }
   if(name.startsWith("$B")){
    throw new Error("Name cannot start whith $B")
   }
  if(password.length < 8){
    throw new Error("The password required minimum 8 caracters!")
  }
  const regex = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[0-9]).{8,}$/
  const passwordregex = regex.test(password)
  if(!passwordregex){
    throw  new Error("Mandatory password symbol, a number and capital latter!")
  }
  const newPlayer = await services.servicesPostPlayers(body)
  res.status(200).json(newPlayer)
  
 } catch (error) {
  res.status(400).json({Error: error.message})
 }
}
//-----------------------------------------------------------------------------------------------------

const playerUpdate = async (req, res)=>{
  try {
    const id = req.params.id
    const {name, team, balancer, password} = req.body
    const body = {name, team, balancer, password}
    if(!name || !team || !balancer || !password){
      throw new Error("imcomplete body, required name, team, balancer and password")
    }
    if(name.startsWith("$B")){
      throw new Error("Name cannot startWhith $B")
    }
    if(password.length < 8){
      throw new Error("The password required minimum 8 caracters!")
    }
    const regex = /^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[0-9]).{8,}$/
    const passwordregex = regex.test(password)
    if(!passwordregex){
      throw new Error("Mandatory password symbol, a number and capital latter!")
    }
    if(team != "Yellow" && team != "Blue" && team != "White" && team != "Black" && team != "Red" && team != "Green"){
      throw new Error("value of team invalid, required: Yellow or Blue or White or Black or Red or Green")
    }
      const newPlayer = await services.servicesPutPlayer(id, body)
      res.status(200).json({Player: newPlayer})
 } catch (error) {
  console.log(error)
   res.status(400).json({Error: error.message})
 }
}
//-----------------------------------------------------------------------------------------------------

const PlayerDelete = async (req, res)=>{
  try {
    const id = req.params.id
    await services.servicesDeletePlayers(id)
    res.status(201).json()
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}
//-----------------------------------------------------------------------------------------------------

const deleteAllPlayers = async (req, res)=>{
  try {
    await services.servicesDeleteAllPlayers()
    res.status(201).json()
  } catch (error) {
    res.status(400).json({Error: error.message})
  }
}

export  {playersGet, playersPost, playerUpdate, PlayerDelete, deleteAllPlayers}