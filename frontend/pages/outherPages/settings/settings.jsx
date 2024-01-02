import Header from '@/components/Header/header'
import styleSettings from './settings.module.css'
import CardPlayerSetings from '@/components/cardPlayerSettings/cardPlayerSttings'

export default function Settings(){
  return(
    <section className={styleSettings.section_global}>
      <Header iconAction={3}/>
      <main className={styleSettings.main}>
        <div className={styleSettings.div_bancos}>
          <h1 className={styleSettings.h1_jogadores}>Bancos:</h1>
          <CardPlayerSetings styleComponent='' balance='100.000,00' name='B$Blackstone' img='/images/team/teamBanco.png'/>
        </div>
        <div className={styleSettings.div_jogadores}>
          <h1 className={styleSettings.h1_jogadores}>Joagadores:</h1>
          <CardPlayerSetings id='banco1' styleComponent='' balance='100.000,00' name='Ana' img='/images/team/team4.png'/>
          <CardPlayerSetings id='1' styleComponent='' balance='100.000,00' name='Maria' img='/images/team/team6.png'/>
          <CardPlayerSetings id='1' styleComponent='' balance='100.000,00' name='José' img='/images/team/team1.png'/>
          <CardPlayerSetings id='1' styleComponent='' balance='100.000,00' name='arrasador' img='/images/team/team3.png'/>
          <CardPlayerSetings id='1' styleComponent='' balance='100.000,00' name='Ronaldinho do peneu' img='/images/team/team2.png'/>
          <CardPlayerSetings id='25' styleComponent='' balance='100.000,00' name='Messí' img='/images/team/team5.png'/>
        </div>
      </main>
    </section>
  )
}