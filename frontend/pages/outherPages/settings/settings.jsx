import Header from '@/components/Header/header'
import styleSettings from './settings.module.css'
import CardPlayerSetings from '@/components/cardPlayerSettings/cardPlayerSttings'
import { useEffect, useState } from 'react'
import Api from '@/services/playerApi'
import ApiBanco from '@/services/bancoApi'
import NavbarOpitions from '@/components/navbarOpitions/navbarOpitions'

export default function Settings(){

  const [listaBanco, setListaBancos] = useState([])
  const [listaPlayers, setListaPlayers] = useState([])
  const [functionListar, setFunctionListar] = useState(true)
  const apiPlayers = new Api
  const apiBanco = new ApiBanco

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await apiPlayers.listarPlayers()
        setListaPlayers(response.Players)
      } catch (error) {
        console.log(error)
      }
    }
    const fetchDataBanco = async () =>{
      try {
        const response = await apiBanco.listarBancos()
        setListaBancos(response.Bank)
      } catch (error) {
        console.log(error)
      }
    }
    if(functionListar){
      fetchData()
      fetchDataBanco()
      setFunctionListar(false)
    }
  }, [functionListar])

  const criarElementPlayers = ()=>{
    return listaPlayers.map(player => (
      <CardPlayerSetings onChange={(value)=> setFunctionListar(value)} id={player._id} balance={player.balance} name={player.name} img={`/images/team/team${player.team}.png`}/>
    ))   
  }
  const criarElementBanks = ()=>{
    return listaBanco.map(banco => (
      <CardPlayerSetings onChange={(value)=> setFunctionListar(value)} isBank={true} id={banco._id} balance={banco.balance} name={banco.name} img={`/images/team/teamBanco.png`}/>
    ))   
  }


  return(
    <section className={styleSettings.section_global}>
      <Header />
      <main className={styleSettings.main}>
        <div className={styleSettings.div_bancos}>
          <h1 className={styleSettings.h1_jogadores}>Bancos: {listaBanco.length}</h1>
          {criarElementBanks()}
        </div>
        <div className={styleSettings.div_jogadores}>
          <h1 className={styleSettings.h1_jogadores}>Joagadores: {listaPlayers.length}</h1>
          {criarElementPlayers()}
        </div>
      </main>
      <NavbarOpitions color={4}/>
    </section>
  )
}