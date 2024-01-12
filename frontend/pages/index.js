import styles from '@/styles/index.module.css'
import Header from '@/components/Header/header'
import Image from 'next/image'
import Link from 'next/link'
import CardPlayerSetings from '@/components/cardPlayerSettings/cardPlayerSttings'
import Historicy from '@/components/historic/historicy'
import InputBar from '@/components/inputBar/inputBar'
import NavbarOpitions from '@/components/navbarOpitions/navbarOpitions'

export default function Home() {
  return (
    <section className={styles.index}>
     <Header  />
     <h1 className={styles.h1}>Bem-vindos ao caixa do Banco Imobiliário</h1>
     <p className={styles.p_defina_os}>Defina os participantes para iniciar</p>
     <Link className={styles.Link_button} href={'/outherPages/addplayers/addPlayers'}><button className={styles.button_adicionar}>Adicionar participantes</button></Link>

     {/* backgrrounds */}
     <Image className={styles.imgs_backgrounds_1} src={"/images/backgrounds/background-1.png"} width={108} height={258}></Image>
     <Image className={styles.imgs_backgrounds_2} src={"/images/backgrounds/background-2.png"} width={126} height={126}></Image>
     <Image className={styles.imgs_backgrounds_3} src={"/images/backgrounds/background-3.png"} width={90} height={67}></Image>
     <Image className={styles.imgs_backgrounds_4} src={"/images/backgrounds/background-4.png"} width={80} 
     height={55} ></Image>
     <NavbarOpitions color={1} />
    </section>
  )
}
