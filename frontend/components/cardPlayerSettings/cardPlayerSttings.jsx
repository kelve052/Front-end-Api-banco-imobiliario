import styleCardP from "./cardPlayerS.module.css"
import Image from "next/image"
import Link from "next/link"
import Historicy from "../historic/historicy"
import { useEffect, useState } from "react"
import Api from "@/services/criarUsuario"

export default function CardPlayerSetings (props) {
const [texto_tag_link, useTexto] = useState("Exibir todo o histórico")
const [linlExibirH, UserLinkExibirH] = useState(false)
const [botaoDeletarPlayer, setBotaoDeletarPlayer] = useState(false)
const [deleting, setDeleting] = useState(false)
const api = new Api

const mudarId = ()=>{
  UserLinkExibirH(!linlExibirH)
  if(!linlExibirH){
    useTexto("Fechar histórico")
  }else{
    useTexto("Exibir todo o histórico")
  }
}

useEffect(()=>{
  const fetchData = async ()=>{
    try {
      await api.deletarPlayer(props.id)  
      props.onChange(true)
    } catch (error) {
      console.log(error)
    }
  }

  if(botaoDeletarPlayer){
    fetchData()
    setBotaoDeletarPlayer(false)
  }
}, [botaoDeletarPlayer])



//PROPS->
//[styleComponent] case 1, 2, 3 or 4 alter style of component: (1 / 2 / 3 /4)
//[balance] add value in balance
//[name] add name in player
//[img] add icon profile in player
//[id] id of player for delete

  return(
    <div className={`${styleCardP.cardPlayerSettings} ${props.styleComponent == 2 || props.styleComponent == 3? `${styleCardP.retirar_background}`: ''}`}>
      <div className={styleCardP.blockAll}>
        <div className={styleCardP.TopBlock}>
          <div className={styleCardP.div_fhotoProfile_name_balance}>
            <Image alt="icon profile" className={styleCardP.photoProfile} src={props.img} width={48} height={48}/>
            <div className={`${styleCardP.div_name_balance} ${props.styleComponent == 2? `${styleCardP.div_name_balance_pageAdd}`: ''} ${props.styleComponent == 3? `${styleCardP.div_name_balance_pageTrasac}`: ''}` }>
              <p className={styleCardP.name}>{props.name}</p>
              <p className={styleCardP.balance}>Saldo: <sapn className={styleCardP.span}>R${props.balance}</sapn></p>
            </div>
          </div>
          <div className={styleCardP.div_pencil_trash}>

            <Link href={`../../outherPages/editPlayer/editdsadasdasd${props.id}`}>
              <Image alt="icon pencil" className={`${styleCardP.iconPencil} ${props.styleComponent == 2 || props.styleComponent == 3 || props.styleComponent == 4?  `${styleCardP.ocultar_elemento}`: ''}`} src={"/images/icons/pencil.png"} width={24} height={24}/>
            </Link>

            <Image onClick={()=>setBotaoDeletarPlayer(true)} alt="icon trash" className={`${styleCardP.iconTrash} ${props.styleComponent == 3? `${styleCardP.ocultar_elemento}`: ''}`} src={'/images/icons/trash.png'} width={24} height={24}/>
          </div>
        </div>
        <a onClick={mudarId} className={`${styleCardP.link_exibir_historico} ${props.styleComponent == 2 || props.styleComponent == 3? `${styleCardP.ocultar_elemento}`: ''}`} href={"#"}>{texto_tag_link}</a>
      </div>
      
        <div className={`${styleCardP.div_exibir_historico} ${linlExibirH ? styleCardP.linkBlock: ""}`} >
          
          <Historicy img1={"/images/team/team1.png"} 
          img2={"/images/team/team2.png"} 
          name1="Marco" name2="Anadsafdfe"
          value="15000"
          type="Recebeu"/>
          <Historicy 
          img1={"/images/team/team1.png"} 
          img2={"/images/team/team2.png"} 
          name1="Marco" name2="Anadsafdfe"
          value="15000"
          type="Enviou"/>
          <Historicy 
          img1={"/images/team/team1.png"} 
          img2={"/images/team/team2.png"} 
          name1="Marco" name2="Anadsafdfe"
          value="15000"
          type="Recebeu"/>
          <Historicy 
          img1={"/images/team/team1.png"} 
          img2={"/images/team/team2.png"} 
          name1="Marco" name2="Anadsafdfe"
          value="15000"
          type="Enviou"/>
        </div>
    </div>
  )
}