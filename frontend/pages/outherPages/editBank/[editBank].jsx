import Header from '@/components/Header/header'
import styleEdicao from './editBank.module.css'
import { useRouter } from 'next/router'
import CardPlayerSetings from '@/components/cardPlayerSettings/cardPlayerSttings'
import InputBar from '@/components/inputBar/inputBar'
import { useEffect, useState } from 'react'
import ApiBanco from '@/services/bancoApi'
import NavbarOpitions from '@/components/navbarOpitions/navbarOpitions'

export default function Edicao() {
  const router = useRouter();
  const [idBank, setIdPlayear] = useState(useRouter().query.editBank)
  const [player, setPlayer] = useState(null)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [team, setTeam] = useState('')
  const [balance, setBalance] = useState('')
  const [messageError, setMessageError] = useState('')
  const [returnPage, setReturnPage] = useState(false)
  const [exstateCard, setExstateCard] = useState(false)
  const [messageCard, setMessageCard] = useState('Banco Atualizado com Sucesso!')
  const [stateCard, setStateCard] = useState('')
  const [displayCardMessagem, setDisplayCardMensagem] = useState('none')
  const [teamSelecionado, setTeamSelecionado] = useState(null);
  const [botaoEdit, setBotaoEdit] = useState(false)
  const apiBanco = new ApiBanco


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiBanco.listarBancos()
        setPlayer(response.Bank.find(banco => banco._id === idBank))
        console.log(idBank)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [idBank, exstateCard])

  
  useEffect(() => {
    if (player) {
      setStateCard(
        <CardPlayerSetings
          onChange={() => {
            setDisplayCardMensagem('flex');
            setMessageCard('Banco Foi Excluido!');
          }}
          id={player._id}
          styleComponent={4}
          balance={player.balance}
          name={player.name}
          img={`/images/team/teamBanco.png`}
          isBank={true}
        />
      );
      setExstateCard(false);
    }
  }, [player, exstateCard]);

  useEffect(() => {
    const fetchData = async ()=>{
      try {
        await apiBanco.editarBanco(idBank, name, balance)
        setDisplayCardMensagem('flex')
        setMessageError('')
      } catch (error) {
        console.log(error)
        setMessageError(error)
      }
    }
    if(botaoEdit){
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
        <div style={{display: displayCardMessagem}} className={styleEdicao.card_resposta_api}>
        <p>{messageCard}</p>
          <button onClick={() => {
            setDisplayCardMensagem('none')
            messageCard == 'Banco Foi Excluido!'? setReturnPage(true) : setExstateCard(true)
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
          <InputBar onChange={(value) => setBalance(value)} name='' text="Saldo" placeholder={"$R12.996"} />
        </div>
        <p className={styleEdicao.messagem_error}>{messageError}</p>
        <button onClick={()=>setBotaoEdit(true)} className={styleEdicao.botao_salvar_alteracoes}>Salvar Alterações</button>
      </main>
      <NavbarOpitions color={4}/>
    </section>
  )
}