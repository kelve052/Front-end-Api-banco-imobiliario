import styleCardP from "./cardPlayerS.module.css"
import Image from "next/image"
import Link from "next/link"
import Historicy from "../historic/historicy"

export default function CardPlayerSetings (props) {
  return(
    <div className={styleCardP.cardPlayerSettings}>
      <div className={styleCardP.blockAll}>
        <div className={styleCardP.TopBlock}>
          <div className={styleCardP.div_fhotoProfile_name_balance}>
            <Image className={styleCardP.photoProfile} src={props.img} width={48} height={48}/>
            <div className={styleCardP.div_name_balance}>
              <p className={styleCardP.name}>{props.name}</p>
              <p className={styleCardP.balance}>Saldo: <sapn className={styleCardP.span}>R${props.balance}</sapn></p>
            </div>
          </div>
          <div className={styleCardP.div_pencil_trash}>
            <Image className={styleCardP.iconPencil} src={"/images/icons/pencil.png"} width={22} height={22}/>
            <Image className={styleCardP.iconTrash} src={'/images/icons/trash.png'} width={22} height={22}/>
          </div>
        </div>
        <Link className={styleCardP.link_exibir_historico} href={""}>Exibir todo o histórico</Link>
      </div>
      
        <div className={styleCardP.div_exibir_historico}>
          
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