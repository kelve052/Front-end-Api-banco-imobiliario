import styleCardP from "./cardPlayerS.module.css"
import Image from "next/image"
import Link from "next/link"
import Historicy from "../historic/historicy"
import { useEffect, useState } from "react"
import Api from "@/services/playerApi"
import ApiBanco from "@/services/bancoApi"
import RegistroApi from "@/services/registroApi"

export default function CardPlayerSetings(props) {
  const [texto_tag_link, useTexto] = useState("Exibir todo o histórico")
  const [linlExibirH, UserLinkExibirH] = useState(false)
  const [botaoDeletarPlayer, setBotaoDeletarPlayer] = useState(false)
  const [listaRegistros, setListaRegistros] = useState([])
  const [textSaldo, setTextSaldo] = useState('Saldo:')
  const api = new Api
  const apiBanco = new ApiBanco
  const apiRegisters = new RegistroApi

  const mudarId = () => {
    UserLinkExibirH(!linlExibirH)
    if (!linlExibirH) {
      useTexto("Fechar histórico")
    } else {
      useTexto("Exibir todo o histórico")
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      if (props.isBank) {
        try {
          await apiBanco.deletarBanco(props.id)
          props.onChange(true)
        } catch (error) {
          console.log('error ao deletar banco:', error)
        }
      } else {
        try {
          await api.deletarPlayer(props.id)
          props.onChange(true)
        } catch (error) {
          console.log(error)
        }
      }
    }

    if (botaoDeletarPlayer) {
      fetchData()
      setBotaoDeletarPlayer(false)
    }
  }, [botaoDeletarPlayer])

  //list registers
  useEffect(() => {
    const fetchData = async ()=>{
      try {
        const response = await apiRegisters.listarRegistros()
        setListaRegistros(response.Registers)
      } catch (error) {
        setListaRegistros(['Nenhum PLayer encontrado'])
      }
    }
    if(props.styleComponent == 2){
      setTextSaldo('')
    }
    fetchData()
  }, [])

  const cardElemntoHistorico = ()=>{
    return listaRegistros.filter(registro => registro.playerWhoSent == props.name || registro.playerWhoReceived == props.name).map((player) => {
      let img1, img2, type, name1, name2;
  
      if (player.playerWhoSent === props.name) {
        // Se o player1 corresponde a playerWhoSent
        img1 = `/images/team/team${player.teamPlayerWhoSent}.png`;
        img2 = `/images/team/team${player.teamPlayerWhoReceived}.png`;
        type = 'Enviou';
        name1 = player.playerWhoSent;
        name2 = player.playerWhoReceived;
      } else if (player.playerWhoReceived === props.name) {
        // Se o player1 corresponde a playerWhoReceived
        img1 = `/images/team/team${player.teamPlayerWhoReceived}.png`;
        img2 = `/images/team/team${player.teamPlayerWhoSent}.png`;
        type = 'Recebeu';
        name1 = player.playerWhoReceived;
        name2 = player.playerWhoSent;
      }
  
      return (
        <Historicy
          key={player._id}
          img1={img1}
          img2={img2}
          type={type}
          name1={name1}
          name2={name2}
          value={player.balanceValue}
        />
      );
    });
  }

  //PROPS->
  //[styleComponent] case 1, 2, 3 or 4 alter style of component: (1 / 2 / 3 /4)
  //[balance] add value in balance
  //[name] add name in player
  //[img] add icon profile in player
  //[id] id of player for delete adn edit
  //[isBank] for user id delete banck

  
  return (
    <div className={`${styleCardP.cardPlayerSettings} ${props.styleComponent == 2 || props.styleComponent == 3 ? `${styleCardP.retirar_background}` : ''}`}>
      <div className={styleCardP.blockAll}>
        <div className={styleCardP.TopBlock}>
          <div className={styleCardP.div_fhotoProfile_name_balance}>
            <Image alt="icon profile" className={styleCardP.photoProfile} src={props.img} width={48} height={48} />
            <div className={`${styleCardP.div_name_balance} ${props.styleComponent == 2 ? `${styleCardP.div_name_balance_pageAdd}` : ''} ${props.styleComponent == 3 ? `${styleCardP.div_name_balance_pageTrasac}` : ''}`}>
              <p className={styleCardP.name}>{props.name}</p>
              <p className={styleCardP.balance}>{textSaldo} <sapn className={styleCardP.span}>R${props.balance}</sapn></p>
            </div>
          </div>
          <div className={styleCardP.div_pencil_trash}>

            <Link href={`${props.isBank? `../../outherPages/editBank//${props.id}` : `../../outherPages/editPlayer//${props.id}`}`}>
              <Image alt="icon pencil" className={`${styleCardP.iconPencil} ${props.styleComponent == 2 || props.styleComponent == 3 || props.styleComponent == 4 ? `${styleCardP.ocultar_elemento}` : ''}`} src={"/images/icons/pencil.png"} width={24} height={24} />
            </Link>

            <Image onClick={() => setBotaoDeletarPlayer(true)} alt="icon trash" className={`${styleCardP.iconTrash} ${props.styleComponent == 3 ? `${styleCardP.ocultar_elemento}` : ''}`} src={'/images/icons/trash.png'} width={24} height={24} />
          </div>
        </div>
        <p onClick={mudarId} className={`${styleCardP.link_exibir_historico} ${props.styleComponent == 2 || props.styleComponent == 3 ? `${styleCardP.ocultar_elemento}` : ''}`}>{texto_tag_link}</p>
      </div>

      <div className={`${styleCardP.div_exibir_historico} ${linlExibirH ? styleCardP.linkBlock : ""}`} >
      {listaRegistros.length === 0 ?  (<div class={`${styleCardP.loader}`}></div>) : cardElemntoHistorico()}
      </div>
    </div>
  )
}