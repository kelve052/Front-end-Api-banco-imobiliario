import Image from "next/image"
import Link from "next/link"
import styleHeader from "./header.module.css"

export default function Header (props){
  //PROPS->
  //[iconAcition] alter icon of action in header [2 / 3]

  let srcImage = "/images/icons/settings.png"
  let link = "/settings"
  if(props.iconAcition == 2){// altera icone de configuração para play
    srcImage = "/images/icons/play.png"
    link = "/outherPages/transactions/transactions"
  }else if(props.iconAcition == 3){// altera icone de configuração para voltar
    srcImage = "/images/icons/arow_return.png"
    link = "/outherPages/transactions/transactions"
  }
  return(
    <header className={styleHeader.header}>
      <div className={styleHeader.div_logo_h1}>
        <Image alt="logo" className={styleHeader.logo} src={"/images/icons/logo.png"} width={30} height={30}/>
        <h1 className={styleHeader.h1}>Banco Imobiliário</h1>
      </div>
      <Link href={link}>
        <Image alt="icon-settings" className={styleHeader.iconSettings} src={srcImage} width={20} height={20}/>
      </Link>
    </header>
  )
}