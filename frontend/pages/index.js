import styles from '@/styles/index.module.css'
import Header from '@/components/Header/header'
import CardPlayerSetings from '@/components/cardPlayerSettings/cardPlayerSttings'
import Historicy from '@/components/historic/historicy'

export default function Home() {
  return (
    <section className={styles.index}>
     <Header  />
     <CardPlayerSetings img={"/images/team/team1.png"} name="João" balance="1000"/>
     <CardPlayerSetings img={"/images/team/team1.png"} name="João" balance="1000"/>
     <CardPlayerSetings img={"/images/team/team1.png"} name="João" balance="1000"/>
    </section>
  )
}
