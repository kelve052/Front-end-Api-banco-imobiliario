import styles from '@/styles/index.module.css'
import Header from '@/components/Header/header'
import CardPlayerSetings from '@/components/cardPlayerSettings/cardPlayerSttings'
import Historicy from '@/components/historic/historicy'
import InputBar from '@/components/inputBar/inputBar'

export default function Home() {
  return (
    <section className={styles.index}>
     <Header  />
      <InputBar valueInvalid={false}  text={"Nome"} placeholder={"JoaninhaDoPneu"}/>
      <InputBar valueInvalid={false}  text={"Nome"} widthImput={317} placeholder={"JoaninhaDoPneu"}/>
      <InputBar valueInvalid={false}  text={"Nome"} widthImput={317} placeholder={"JoaninhaDoPneu"}/>
      <InputBar valueInvalid={false}  text={"Nome"} widthImput={317} placeholder={"JoaninhaDoPneu"}/>
      <InputBar valueInvalid={false}  text={"Nome"} widthImput={317} placeholder={"JoaninhaDoPneu"}/>
    </section>
  )
}
