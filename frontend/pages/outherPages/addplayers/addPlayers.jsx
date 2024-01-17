import Header from "@/components/Header/header"
import styleAddP from "./addPlayers.module.css"
import InputBar from "@/components/inputBar/inputBar"
import Image from "next/image"
import { useEffect, useState } from "react"
import CardPlayerSetings from "@/components/cardPlayerSettings/cardPlayerSttings"
import Api from "@/services/playerApi"
import ApiBanco from "@/services/bancoApi"
import NavbarOpitions from "@/components/navbarOpitions/navbarOpitions"

export default function AddPlayers() {
  const api = new Api
  const apiBanco = new ApiBanco
  const [listaPlayer, setListaPlayer] = useState([])
  const [botaoAdicionar, setBotaoAdicionar] = useState(false)
  const [btnDeletarTodosPlayers, setBtnDeletarTodosPlayers] = useState(false)
  const [message, setMessage] = useState(null)
  const [executarFuncaoListarPlayer, setExecutarFuncaoListarPlayer] = useState(true)
  const [listaPlayersNull, setListaPlayersNull] = useState(false)
  const [listaBanco, setListaBanco] = useState([])

  const [objetoPlayer, setObjetoPlayer] = useState({ name: '', password: '', balance: '', team: '' })
  useEffect(() => {
    if(!checkboxMark){
      const fetchData = async () => {
        try {
          const response = await api.CriarPlayer(objetoPlayer)
          setMessage(response)
        } catch (error) {
          setMessage(error)
        }
      }
      if (botaoAdicionar) {
        fetchData();
        setExecutarFuncaoListarPlayer(true);
        setBotaoAdicionar(false);
      }
    }else{
      const fetchData = async ()=>{
        try {
          const response = await apiBanco.criarBanco(objetoPlayer.name, objetoPlayer.balance)
          setMessage(response)
          setExecutarFuncaoListarPlayer(true)
        } catch (error) {
          console.log(error)
          setMessage(error)
        }
      }
      if(botaoAdicionar){
        fetchData()
        setBotaoAdicionar(false)
      }
    }
  }, [botaoAdicionar])

  useEffect(() => {
    const fetchData = async () => {
      try {
        api.deletarTodosPlayers()
      } catch (error) {
        console.log(error)
      }
    }

    if (btnDeletarTodosPlayers) {
      fetchData()
      setBtnDeletarTodosPlayers(false)
      setExecutarFuncaoListarPlayer(true);
    }
  }, [btnDeletarTodosPlayers])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.listarPlayers()        
        setListaPlayer(response.Players)
      } catch (error) {
        console.error('Erro ao listar players:', error);
      }
    }
    const fetchDataBanck = async ()=>{
      try {
        const response = await apiBanco.listarBancos()        
        setListaBanco(response.Bank)
      } catch (error) {
        console.error('Erro ao listar bancos:', error)
      }
    }
    if (executarFuncaoListarPlayer) {      
      fetchData();
      fetchDataBanck()
      setExecutarFuncaoListarPlayer(false);
    }
  }, [executarFuncaoListarPlayer])

  const elementosPlayers = () => {
    const cardsElementos = listaPlayer.map((player) => 
      (
        <CardPlayerSetings
          onChange={() => setExecutarFuncaoListarPlayer(true)}
          key={player._id}
          id={player._id}
          styleComponent={2}
          balance={player.balance}
          name={player.name}
          img={`/images/team/team${player.team}.png`}
        />)
    );  
    return cardsElementos
  }

  const elementosBank = () =>{
    const cardElementos = listaBanco.map(bank =>(
      <CardPlayerSetings
          onChange={() => setExecutarFuncaoListarPlayer(true)}
          key={bank._id}
          id={bank._id}
          isBank={true}
          styleComponent={2}
          balance={bank.balance}
          name={bank.name}
          img={`/images/team/teamBanco.png`}
        />
    ))
    return cardElementos
  }

  useEffect(() => {
    if (listaPlayer.length === 0) {
      setListaPlayersNull(true);
    }
  }, [listaPlayer]);

  const [teamSelecionado, setTeamSelecionado] = useState(null);
  const [checkboxMark, setCheckboxMark] = useState(false);

  const actionSelecionar = (id) => {
    setTeamSelecionado((prevState) => (prevState === id ? null : id));
  };

  const checkedTrue = () => {
    setCheckboxMark(!checkboxMark);
  };

  return (
    <section className={styleAddP.section_global}>
      <Header />
      <h1 className={styleAddP.h1_adiciona_part}>Adicionar participante</h1>

      <main className={styleAddP.section_inputs}>
        <InputBar onChange={(value) => setObjetoPlayer((prev) => ({ ...prev, name: value }))} name='nome' text="Nome" width={312} placeholder={"arradador42"} />
        <InputBar onChange={(value) => setObjetoPlayer((prev) => ({ ...prev, password: value }))} isBanck={checkboxMark} name='senha' text="Senha" width={312} placeholder={"$textd123"} />
        <div className={styleAddP.div_imput_checkbox}>
          <InputBar onChange={(value) => setObjetoPlayer((prev) => ({ ...prev, balance: value }))} name='balance' text="Saldo" placeholder={"$R12.996"} />
          <div className={styleAddP.div_checkbox_p}>
            <span className={styleAddP.span_checkbox}>
              <input checked={checkboxMark} onChange={checkedTrue} className={styleAddP.checkbox} type="checkbox" />
            </span>
            <p className={styleAddP.p_e_um_banco}>É um banco?</p>
          </div>
        </div>
        <p className={styleAddP.p_equipe}>Equipe</p>

        {checkboxMark ?
          (
            <div className={styleAddP.div_icons_equipe}>
              <Image onClick={() => { actionSelecionar(7) }} id={7} className={`${styleAddP.imgs_team} ${teamSelecionado === 7 ? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/teamBanco.png'} />
            </div>
          )
          :
          (
            <div className={styleAddP.div_icons_equipe}>
              <Image onClick={() => { setObjetoPlayer((prev) => ({ ...prev, team: 'Blue' })), actionSelecionar(1) }} id={1} className={`${styleAddP.imgs_team} ${teamSelecionado === 1 ? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/teamBlue.png'} />
              <Image onClick={() => { setObjetoPlayer((prev) => ({ ...prev, team: 'Green' })), actionSelecionar(2) }} id={2} className={`${styleAddP.imgs_team} ${teamSelecionado === 2 ? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/teamGreen.png'} />
              <Image onClick={() => { setObjetoPlayer((prev) => ({ ...prev, team: 'Red' })), actionSelecionar(3) }} id={3} className={`${styleAddP.imgs_team} ${teamSelecionado === 3 ? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/teamRed.png'} />
              <Image onClick={() => { setObjetoPlayer((prev) => ({ ...prev, team: 'Yellow' })), actionSelecionar(4) }} id={4} className={`${styleAddP.imgs_team} ${teamSelecionado === 4 ? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/teamYellow.png'} />
              <Image onClick={() => { setObjetoPlayer((prev) => ({ ...prev, team: 'White' })), actionSelecionar(5) }} id={5} className={`${styleAddP.imgs_team} ${teamSelecionado === 5 ? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/teamWhite.png'} />
              <Image onClick={() => { setObjetoPlayer((prev) => ({ ...prev, team: 'Black' })), actionSelecionar(6) }} id={6} className={`${styleAddP.imgs_team} ${teamSelecionado === 6 ? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/teamBlack.png'} />
            </div>
          )
        }
        <p className={`${styleAddP.message_error}`}>{typeof message == 'object' ? '' : `${message}`}</p>
        <button onClick={() => setBotaoAdicionar(true)} className={styleAddP.botao_adicionar}>Adicionar</button>
        <div className={styleAddP.div_participantes}>
          <h3 className={styleAddP.h3_Participantes}>Participantes</h3>
          <div className={styleAddP.div_players_adicionado}>
            {elementosPlayers().length == 0 ?
              (<div class={`${styleAddP.loader} ${listaPlayersNull? `${styleAddP.esconderLoder}`: ''}`}></div>)
              :
              (<>
                {elementosBank()}
                {elementosPlayers()}
              </>)}
          </div>
          <button onClick={() => setBtnDeletarTodosPlayers(true)} className={styleAddP.botao_resetar}>Resetar</button>
        </div>
      </main>
      <NavbarOpitions color={2}/>
    </section>
  );
}
