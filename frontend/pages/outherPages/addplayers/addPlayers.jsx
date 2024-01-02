import Header from "@/components/Header/header"
import styleAddP from "./addPlayers.module.css"
import InputBar from "@/components/inputBar/inputBar"
import Image from "next/image"
import { useState } from "react"
import CardPlayerSetings from "@/components/cardPlayerSettings/cardPlayerSttings"

export default function AddPlayers() {
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
      <Header iconAction={2} />
      <h1 className={styleAddP.h1_adiciona_part}>Adicionar participante</h1>

      <main className={styleAddP.section_inputs}>
        <InputBar name='nome' text="Nome" width={312} placeholder={"arradador42"} />
        <InputBar isBanck={checkboxMark} name='senha' text="Senha" width={312} placeholder={"$textd123"} />
        <div className={styleAddP.div_imput_checkbox}>
          <InputBar name='' text="Saldo" placeholder={"$R12.996"} />
          <div className={styleAddP.div_checkbox_p}>
            <span className={styleAddP.span_checkbox}>
              <input checked={checkboxMark} onChange={checkedTrue} className={styleAddP.checkbox} type="checkbox" />
            </span>
            <p className={styleAddP.p_e_um_banco}>É um banco?</p>
          </div>
        </div>
        <p className={styleAddP.p_equipe}>Equipe</p>

        {checkboxMark?
        (
        <div className={styleAddP.div_icons_equipe}>
          <Image  onClick={() => actionSelecionar(7)} id={7} className={`${styleAddP.imgs_team} ${teamSelecionado === 7 ? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/teamBanco.png'} />
        </div>
        )
        :
        (
        <div className={styleAddP.div_icons_equipe}>
          <Image onClick={() => actionSelecionar(1)} id={1} className={`${styleAddP.imgs_team} ${teamSelecionado === 1 ? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/team1.png'} />
          <Image onClick={() => actionSelecionar(2)} id={2} className={`${styleAddP.imgs_team} ${teamSelecionado === 2 ? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/team2.png'} />
          <Image onClick={() => actionSelecionar(3)} id={3} className={`${styleAddP.imgs_team} ${teamSelecionado === 3 ? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/team3.png'} />
          <Image onClick={() => actionSelecionar(4)} id={4} className={`${styleAddP.imgs_team} ${teamSelecionado === 4 ? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/team4.png'} />
          <Image onClick={() => actionSelecionar(5)} id={5} className={`${styleAddP.imgs_team} ${teamSelecionado === 5 ? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/team5.png'} />
          <Image onClick={() => actionSelecionar(6)} id={6} className={`${styleAddP.imgs_team} ${teamSelecionado === 6 ? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/team6.png'} />
        </div>
        )
        }
        
        <button className={styleAddP.botao_adicionar}>Adicionar</button>
        <div className={styleAddP.div_participantes}>
          <h3 className={styleAddP.h3_Participantes}>Participantes</h3>
          <div className={styleAddP.div_players_adicionado}>
            <CardPlayerSetings styleComponent={2} balance='1.554,00' name='Maria' img='/images/team/team1.png' />
            <CardPlayerSetings styleComponent={2} balance='1.554,00' name='Ana' img='/images/team/team6.png' />
            <CardPlayerSetings styleComponent={2} balance='1.554,00' name='Beatris' img='/images/team/team4.png' />
            <CardPlayerSetings styleComponent={2} balance='1.554,00' name='Pedro' img='/images/team/team5.png' />
            <CardPlayerSetings styleComponent={2} balance='1.554,00' name='João Batista' img='/images/team/team2.png' />
          </div>
          <button className={styleAddP.botao_resetar}>Resetar</button>
        </div>
      </main>
    </section>
  );
}
