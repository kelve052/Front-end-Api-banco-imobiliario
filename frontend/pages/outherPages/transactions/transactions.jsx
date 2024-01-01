import Header from '@/components/Header/header'
import styleTransaction from './transactions.module.css'
import SelectPlayer from '@/components/selectPlayer/selectPlayer'
import InputBar from '@/components/inputBar/inputBar'
import Historicy from '@/components/historic/historicy'
import Link from 'next/link'

export default function transactions () {
  return(
    <section className={styleTransaction.section_global}> 
      <Header />
      <main className={styleTransaction.main}>
        <SelectPlayer text='De' nameSelect='player1' id='1'/>
        <SelectPlayer text='Para' nameSelect='player2' id='2'/>
        <div className={styleTransaction.div_inputValor_button}>
          <InputBar text='Valor' placeholder='R$1.000,00'/>
          <button className={styleTransaction.botao_transferir}>Transferir</button>
        </div>
        <h3 className={styleTransaction.h3_historico}>Histórico</h3>
        <div className={styleTransaction.div_historico}>
          <Historicy img1='/images/team/team6.png' img2='/images/team/team5.png' type='Recebeu' name1='Marco' name2='Josilvaldo' value='1000' />
          <Historicy img1='/images/team/team6.png' img2='/images/team/team4.png' type='Enviou' name1='Marco' name2='Ana' value='1000' />
          <Historicy img1='/images/team/team6.png' img2='/images/team/team1.png' type='Recebeu' name1='Marco' name2='Carlos' value='1000' />
          <Link className={styleTransaction.link_exibir_todo_h} href={''}>Exibir todo o histórico</Link>
        </div>
      </main>
    </section>
  )
}