import styleHistoricy from "./historicy.module.css"
import Image from "next/image"

export default function Historicy (props){
  //PROPS->
  //[img1] add icon-profile
  //[img2] add icon-profile
  //[type] type of transaction: (Recebeu / Enviou)
  //[name1] add name player
  //[name2]add name player
  //[value] add value balance transaction

  let classColor = styleHistoricy.type_sent
  let classHystoricy = styleHistoricy.historicyRed
  if(props.type == "Recebeu"){
    classColor = styleHistoricy.type_received
    classHystoricy = styleHistoricy.historicyGreen
  }
  return(
    <div className={classHystoricy}>
      <div className={styleHistoricy.div_name_profile}>
        <Image alt="icon-profile"  width={20}  height={20} src={props.img1}/>
        <p>{props.name1}</p>
      </div>
      <p className={styleHistoricy.type}>{props.type}</p>
      <div className={styleHistoricy.div_name_profile}>
        <Image alt="icon-profile"  width={20}  height={20} src={props.img2}/>
        <p>{props.name2} - </p>
      </div>
      <p className={classColor}>R${props.value}</p>
    </div>
  )
}