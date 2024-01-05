import Header from '@/components/Header/header'
import styleTransaction from './transactions.module.css'
import SelectPlayer from '@/components/selectPlayer/selectPlayer'
import InputBar from '@/components/inputBar/inputBar'
import Historicy from '@/components/historic/historicy'
import Link from 'next/link'
import Image from 'next/image'
import { use, useEffect, useState } from 'react'
import RegistroApi from '@/services/registroApi'

export default function transactions() {
  const [responseApi, setResponseApi] = useState()
  const [player1, setPlayer1] = useState()
  const [player2, setPlayer2] = useState()
  const [balance, setBalance] = useState()
  const [botaoTranferir, setbotaoTranferir] = useState(false)
  const [displayCardMensagem, setDisplayCardMensagem] = useState('none')
  const [listarPlayersCompFilho, setListarPlayersCompFilho] = useState(false)
  const [displayPMensagem, setDisplayPMensagem] = useState('none')
  const api = new RegistroApi

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.criarRegistro(player1, player2, balance)
        console.log(response)
        setResponseApi(response.Msg)
        setListarPlayersCompFilho(true)
        setDisplayCardMensagem('flex')
        setDisplayPMensagem('none')
      } catch (error) {
        setResponseApi(error)
        setDisplayPMensagem('inline')
        console.log(error)
      }
    }
    if (botaoTranferir) {
      fetchData()
      setbotaoTranferir(false)
    }
  }, [botaoTranferir])

  const listarPlayers = () => {
    setListarPlayersCompFilho(false)
  }

  return (
    <section className={styleTransaction.section_global}>
      <Header />
      <main className={styleTransaction.main}>
        <div style={{ display: displayCardMensagem }} className={styleTransaction.card_resposta_api}>
          <p>{responseApi}</p>
          <button onClick={() => {
            setDisplayCardMensagem('none')
            listarPlayers()
          }}>Ok</button>
        </div>
        <SelectPlayer listarPlayersCompFilho={listarPlayersCompFilho} player={(value) => setPlayer1(value)} text='De' nameSelect='player1' id='1' />
        <SelectPlayer listarPlayersCompFilho={listarPlayersCompFilho} player={(value) => setPlayer2(value)} received={true} text='Para' nameSelect='player2' id='2' />
        <div className={styleTransaction.div_inputValor_button}>
          <InputBar onChange={(value) => setBalance(value)} text='Valor' placeholder='R$1.000,00' />
          <button onClick={() => setbotaoTranferir(true)} className={styleTransaction.botao_transferir}>Transferir</button>
        </div>
        <p style={{ display: displayPMensagem }} className={styleTransaction.p_mensagem_erro}>{responseApi}</p>
        <h3 className={styleTransaction.h3_historico}>Histórico</h3>
        <div className={styleTransaction.div_historico}>
          <Historicy img1='/images/team/team6.png' img2='/images/team/team5.png' type='Recebeu' name1='Marco' name2='Josilvaldo' value='1000' />
          <Historicy img1='/images/team/team6.png' img2='/images/team/team4.png' type='Enviou' name1='Marco' name2='Ana' value='1000' />
          <Historicy img1='/images/team/team6.png' img2='/images/team/team1.png' type='Recebeu' name1='Marco' name2='Carlos' value='1000' />
          <Link className={styleTransaction.link_exibir_todo_h} href={''}>Exibir todo o histórico</Link>

          {/* background */}
          <Image className={styleTransaction.imgs_backgrounds_1} src={"/images/backgrounds/background-5.png"} width={250} height={355}></Image>
        </div>
      </main>
    </section>
  )
}