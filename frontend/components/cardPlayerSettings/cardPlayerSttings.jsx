import styleCardP from "./cardPlayerS.module.css"
import Image from "next/image"
import Link from "next/link"
import Historicy from "../historic/historicy"
import { useState } from "react"

export default function CardPlayerSetings (props) {
const [texto_tag_link, useTexto] = useState("Exibir todo o histórico")
const [linlExibirH, UserLinkExibirH] = useState(false)
const mudarId = ()=>{
  UserLinkExibirH(!linlExibirH)
  if(!linlExibirH){
    useTexto("Fechar histórico")
  }else{
    useTexto("Exibir todo o histórico")
  }
}


//PROPS->
//[pageAddPlayers] case true alter style of component: (true / false)
//[balance] add value in balance
//[name] add name in player
//[img] add icon profile in player

  return(
    <div className={`${styleCardP.cardPlayerSettings} ${props.pageAddPlayers == true? `${styleCardP.retirar_background}`: ''}`}>
      <div className={styleCardP.blockAll}>
        <div className={styleCardP.TopBlock}>
          <div className={styleCardP.div_fhotoProfile_name_balance}>
            <Image alt="icon profile" className={styleCardP.photoProfile} src={props.img} width={48} height={48}/>
            <div className={`${styleCardP.div_name_balance} ${props.pageAddPlayers == true? `${styleCardP.div_name_balance_pageAdd}`: ''}`}>
              <p className={styleCardP.name}>{props.name}</p>
              <p className={styleCardP.balance}>Saldo: <sapn className={styleCardP.span}>R${props.balance}</sapn></p>
            </div>
          </div>
          <div className={styleCardP.div_pencil_trash}>

            <Image alt="icon pencil" className={`${styleCardP.iconPencil} ${props.pageAddPlayers == true?  `${styleCardP.ocultar_elemento}`: ''}`} src={"/images/icons/pencil.png"} width={24} height={24}/>

            <Image alt="icon trash" className={styleCardP.iconTrash} src={'/images/icons/trash.png'} width={24} height={24}/>
          </div>
        </div>
        <Link onClick={mudarId} className={`${styleCardP.link_exibir_historico} ${props.pageAddPlayers == true? `${styleCardP.ocultar_elemento}`: ''}`} href={""}>{texto_tag_link}</Link>
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