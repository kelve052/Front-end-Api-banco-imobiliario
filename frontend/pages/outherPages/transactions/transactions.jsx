import Header from '@/components/Header/header'
import styleTransaction from './transactions.module.css'
import SelectPlayer from '@/components/selectPlayer/selectPlayer'
import InputBar from '@/components/inputBar/inputBar'
import Historicy from '@/components/historic/historicy'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import RegistroApi from '@/services/registroApi'
import NavbarOpitions from '@/components/navbarOpitions/navbarOpitions'

export default function transactions() {
  const [responseApi, setResponseApi] = useState()
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')
  const [team1, setTeam1] = useState('')
  const [team2, setTeam2] = useState('')
  const [balance, setBalance] = useState()
  const [botaoTranferir, setbotaoTranferir] = useState(false)
  const [displayCardMensagem, setDisplayCardMensagem] = useState('none')
  const [listarPlayersCompFilho, setListarPlayersCompFilho] = useState(false)
  const [displayPMensagem, setDisplayPMensagem] = useState('none')
  const [exibirTodoHistorico, setExibirTodoHistorico] = useState(false)
  const [historico, setHistorico] = useState([])
  const api = new RegistroApi

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.criarRegistro(player1, player2, balance, team1, team2)
        console.log(response)
        setResponseApi(response.Msg)
        setDisplayCardMensagem('flex')
        setListarPlayersCompFilho(true)
        setDisplayPMensagem('none')        

        if(response){
          const responseListar = await api.listarRegistros()
          setHistorico(responseListar.Registers)
          console.log('certo', response)
        }
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

  const card = (exibirTudo = false) => {
    let limitHistorico = 4
    if(exibirTudo){
      limitHistorico = -1
    }
    return historico.filter(registro => registro.playerWhoSent == player1 || registro.playerWhoReceived == player1).slice(0, limitHistorico).map((player) => {
      let img1, img2, type, name1, name2;
  
      if (player.playerWhoSent === player1) {
        // Se o player1 corresponde a playerWhoSent
        img1 = `/images/team/team${player.teamPlayerWhoSent}.png`;
        img2 = `/images/team/team${player.teamPlayerWhoReceived}.png`;
        type = 'Enviou';
        name1 = player.playerWhoSent;
        name2 = player.playerWhoReceived;
      } else if (player.playerWhoReceived === player1) {
        // Se o player1 corresponde a playerWhoReceived
        img1 = `/images/team/team${player.teamPlayerWhoReceived}.png`;
        img2 = `/images/team/team${player.teamPlayerWhoSent}.png`;
        type = 'Recebeu';
        name1 = player.playerWhoReceived;
        name2 = player.playerWhoSent;
      }
  
      return (
        <Historicy
          key={player._id}
          img1={img1}
          img2={img2}
          type={type}
          name1={name1}
          name2={name2}
          value={player.balanceValue}
        />
      );
    });
  };

  return (
    <section className={styleTransaction.section_global}>
      <Header />
      <main className={styleTransaction.main}>
        <div style={{ display: displayCardMensagem }} className={styleTransaction.card_resposta_api}>
          <p>{responseApi}</p>
          <button onClick={() => {
            setDisplayCardMensagem('none')
            setListarPlayersCompFilho(false)
          }}>Ok</button>
        </div>
        <SelectPlayer listarPlayersCompFilho={listarPlayersCompFilho}
          player={(value) => {
            setPlayer1(value.name)
            setTeam1(value.team)
          }}
          text='De' nameSelect='player1' id='1' />
        <SelectPlayer listarPlayersCompFilho={listarPlayersCompFilho}
          player={(value) => {
            setPlayer2(value.name)
            setTeam2(value.team)
          }}
          received={true} text='Para' nameSelect='player2' id='2' />
        <div className={styleTransaction.div_inputValor_button}>
          <InputBar onChange={(value) => setBalance(value)} text='Valor' placeholder='R$1.000,00' />
          <button onClick={() => setbotaoTranferir(true)} className={styleTransaction.botao_transferir}>Transferir</button>
        </div>
        <p style={{ display: displayPMensagem }} className={styleTransaction.p_mensagem_erro}>{responseApi}</p>
        <h3 className={styleTransaction.h3_historico}>Histórico</h3>
        <div className={styleTransaction.div_historico}>
          {exibirTodoHistorico? card(true) : card()}
        </div>
        <a onClick={()=> setExibirTodoHistorico(!exibirTodoHistorico)} className={styleTransaction.a_exibir_todo_historico} href="#">Exibir todo o histórico</a>
        {/* background */}
        <Image className={styleTransaction.imgs_backgrounds_1} src={"/images/backgrounds/background-5.png"} width={250} height={355}></Image>
      </main>
      <NavbarOpitions color={3} />
    </section>
  )
}