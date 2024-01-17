import Header from '@/components/Header/header'
import styleEdicao from './editPlayer.module.css'
import { useRouter } from 'next/router'
import CardPlayerSetings from '@/components/cardPlayerSettings/cardPlayerSttings'
import InputBar from '@/components/inputBar/inputBar'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Api from '@/services/playerApi'
import NavbarOpitions from '@/components/navbarOpitions/navbarOpitions'

export default function Edicao() {
  const [classEscurecer, setClassEscurecer] = useState('')
  const router = useRouter();
  const idPlayer = useRouter().query.editPlayer
  const [player, setPlayer] = useState([])
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [team, setTeam] = useState('')
  const [balance, setBalance] = useState('')
  const [messageError, setMessageError] = useState('')
  const [returnPage, setReturnPage] = useState(false)
  const [exstateCard, setExstateCard] = useState(false)
  const [messageCard, setMessageCard] = useState('Joagador Atualizado com Sucesso!')
  const [stateCard, setStateCard] = useState('')
  const [displayCardMessagem, setDisplayCardMensagem] = useState('none')
  const [teamSelecionado, setTeamSelecionado] = useState(null);
  const [botaoEdit, setBotaoEdit] = useState(false)
  const apiPlayer = new Api
  const actionSelecionar = (id) => {
    setTeamSelecionado((prevState) => (prevState === id ? null : id));
    setClassEscurecer(styleEdicao.escurecerImg)
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiPlayer.listarPlayers()
        setPlayer(response.Players.find(player => player._id == idPlayer))
        console.log(player)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [idPlayer, exstateCard])

  useEffect(() => {
    if (player) {
      setStateCard(<CardPlayerSetings onChange={() => { setDisplayCardMensagem('flex'), setMessageCard('Jogador Foi Excluido!') }} id={player._id} styleComponent={4} balance={player.balance} name={player.name} img={`/images/team/team${player.team}.png`} />)
    }
    setExstateCard(false)
  }, [player, exstateCard])

  useEffect(() => {
    const fetchData = async () => {
      try {
        await apiPlayer.editarPlayer(idPlayer, name, password, balance, team)
        setDisplayCardMensagem('flex')
        setMessageError('')
      } catch (error) {
        console.log(error)
        setMessageError(error)
      }
    }
    if (botaoEdit) {
      fetchData()
      setBotaoEdit(false)
    }
  }, [botaoEdit])

  useEffect(() => {
    if (returnPage) {
      router.push('/outherPages/settings/settings');
    }
  }, [returnPage]);


  return (
    <section className={styleEdicao.section_global}>
      <Header iconAction={true} />
      <main className={styleEdicao.main}>
        <div style={{ display: displayCardMessagem }} className={styleEdicao.card_resposta_api}>
          <p>{messageCard}</p>
          <button onClick={() => {
            setDisplayCardMensagem('none')
            messageCard == 'Jogador Foi Excluido!' ? setReturnPage(true) : setExstateCard(true)
          }}>Ok</button>
        </div>
        <div className={styleEdicao.div_editar_jogador}>
          <h1 className={styleEdicao.h1_editar_jogador}>Editar Jogador</h1>
          {!player ?
            (
              <div class={`${styleEdicao.loader}`}></div>
            )
            :
            (
              stateCard
            )}
        </div>
        <div className={styleEdicao.div_inputs_edicao}>
          <InputBar onChange={(value) => setName(value)} name='nome' text="Nome" width={312} placeholder={"arradador42"} />
          <InputBar onChange={(value) => setPassword(value)} name='senha' text="Senha" width={312} placeholder={"$textd123"} />
          <InputBar onChange={(value) => setBalance(value)} name='' text="Saldo" placeholder={"$R12.996"} />
        </div>
        <p className={styleEdicao.p_equipe}>Equipe</p>
        <div className={styleEdicao.div_icons_equipe}>
          <Image
            onClick={() => { actionSelecionar(1); setTeam('Blue'); }}
            id={1} className={`${styleEdicao.imgs_team} ${teamSelecionado === 1 ? styleEdicao.time_selecionado : classEscurecer}`} width={48} height={48} src={'/images/team/teamBlue.png'} />

          <Image
            onClick={() => { actionSelecionar(2); setTeam('Green'); }}
            id={2} className={`${styleEdicao.imgs_team} ${teamSelecionado === 2 ? styleEdicao.time_selecionado : classEscurecer}`} width={48} height={48} src={'/images/team/teamGreen.png'} />

          <Image
            onClick={() => { actionSelecionar(3); setTeam('Red'); }}
            id={3} className={`${styleEdicao.imgs_team} ${teamSelecionado === 3 ? styleEdicao.time_selecionado : classEscurecer}`} width={48} height={48} src={'/images/team/teamRed.png'} />

          <Image
            onClick={() => { actionSelecionar(4); setTeam('Yellow'); }}
            id={4} className={`${styleEdicao.imgs_team} ${teamSelecionado === 4 ? styleEdicao.time_selecionado : classEscurecer}`} width={48} height={48} src={'/images/team/teamYellow.png'} />

          <Image
            onClick={() => { actionSelecionar(5); setTeam('White'); }}
            id={5} className={`${styleEdicao.imgs_team} ${teamSelecionado === 5 ? styleEdicao.time_selecionado : classEscurecer}`} width={48} height={48} src={'/images/team/teamWhite.png'} />

          <Image
            onClick={() => { actionSelecionar(6); setTeam('Black'); }}
            id={6} className={`${styleEdicao.imgs_team} ${teamSelecionado === 6 ? styleEdicao.time_selecionado : classEscurecer}`} width={48} height={48} src={'/images/team/teamBlack.png'} />
        </div>
        <p className={styleEdicao.messagem_error}>{messageError}</p>
        <button onClick={() => setBotaoEdit(true)} className={styleEdicao.botao_salvar_alteracoes}>Salvar Alterações</button>
      </main>
      <NavbarOpitions color={4} />
    </section>
  )
}