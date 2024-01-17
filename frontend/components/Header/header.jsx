import Image from "next/image"
import Link from "next/link"
import styleHeader from "./header.module.css"
import { useRouter } from "next/router"

export default function Header (props){
  //PROPS->
  //[iconAction] alter icon of action in header [false,true]

  let srcImage = "/images/icons/arow_return.png"
  let link = "/outherPages/settings/settings"
  let displayImg = 'none'
  if(props.iconAction == true){// altera icone de configuração voltar
    displayImg = ''
  }
  return(
    <header className={styleHeader.header}>
      <div className={styleHeader.div_logo_h1}>
        <Image alt="logo" className={styleHeader.logo} src={"/images/icons/logo.png"} width={30} height={30}/>
        <h1 className={styleHeader.h1}>Banco Imobiliário</h1>
      </div>
      <Link href={link}>
        <Image style={{display: displayImg}} alt="icon-settings" className={styleHeader.iconSettings} src={srcImage} width={20} height={20}/>
      </Link>
    </header>
  )
}