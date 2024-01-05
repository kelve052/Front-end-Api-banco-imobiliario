import { useEffect, useState } from 'react'
import CardPlayerSetings from '../cardPlayerSettings/cardPlayerSttings'
import styleInputS from './selectPlayer.module.css'
import Api from '@/services/playerApi'
import Image from 'next/image'

export default function SelectPlayer(props) {
  //PROPS->
  //{nameSelect} defined name of select
  //{id} defined id of select
  //{text} defned title of select
  //[received] alter style css: [ true / falsae ]

  const [clickSelect, setClickSelect] = useState(false)
  const [maxHeightStyle, setMaxHeightStyle] = useState(0)
  const [opitionSelect, setOpitionSelect] = useState(false)
  const [cardPlayerSelecionado, setCardPlayerSelecionado]  = useState()
  const [textSelect, setTetxSelect] = useState('Escolha o participante que ira enviar:')
  const api = new Api
  const [listaPlayers, setListaPlayers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.listarPlayers()
      setListaPlayers(response.Players)
      console.log(response)
    }
    fetchData()
  }, [props.listarPlayersCompFilho])

  if(clickSelect){
    setMaxHeightStyle(167)
    setClickSelect(false)
  }
  if(opitionSelect){
    setMaxHeightStyle(0)
    setClickSelect(false)
    setOpitionSelect(false)
  }

  const functionPlayerEscolhido = (name, balance, team)=>{
    if(props.player){ //enviar player para component pai
      props.player(name)
    }
    setCardPlayerSelecionado(
      <CardPlayerSetings styleComponent={3} balance={balance} name={name} img={`/images/team/team${team}.png`} />
    )
  }

  const elementosOpitions = ()=>{
    const card = listaPlayers.map((player, index) =>(
      <div key={index} onClick={()=>{
        setOpitionSelect(true)
        setTetxSelect(`${player.name}`)
        functionPlayerEscolhido(player.name, player.balance, player.team)
        }} className={styleInputS.option_div}>
        <Image className={styleInputS.img_div_input} src={`/images/team/team${player.team}.png`} alt='icon_profile' width={25} height={25} />
        <p className={styleInputS.p_div_input}>{player.name}</p>
      </div>
    ))
    return card
  }

  useEffect(()=>{
    if(props.listarPlayersCompFilho){
      setCardPlayerSelecionado('')
    }
  }, [props.listarPlayersCompFilho])

  return (
    <div className={styleInputS.div_global}>
      <p className={styleInputS.p_title}>{props.text}</p>
      <div onClick={()=>setClickSelect(true)} className={styleInputS.select} name={props.nameSelect} id={props.id}>
        <p className={styleInputS.p_select}>{textSelect}</p>
        <div style={{maxHeight: maxHeightStyle}} className={styleInputS.select_div_options}>
          {elementosOpitions()}
        </div>
      </div>
      {cardPlayerSelecionado}
      <span className={`${props.received ? `${styleInputS.card_received_true}` : ''}`}></span>
    </div>
  )
}