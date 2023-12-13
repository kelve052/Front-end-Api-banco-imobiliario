import Image from "next/image"
import Link from "next/link"

export default function Header (props){
  let srcImage = "/images/icons/settings.png"
  let link = "/settings"
  if(props.transactionScrean == true){// tela de participantes
    srcImage = "/images/icons/play.png"
    link = "/trasactions"
  }
  return(
    <header >
      <div >
        <Image  src={"/images/icons/logo.png"} width={30} height={30}/>
        <h1 >Banco Imdddddddddddddddddddobiliário</h1>
      </div>
      <Link href={link}>
        <Image  src={srcImage} width={20} height={20}/>
      </Link>
    </header>
  )
}