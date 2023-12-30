import Header from "@/components/Header/header"
import styleAddP from "./addPlayers.module.css"
import InputBar from "@/components/inputBar/inputBar"
import Image from "next/image"
import { useState } from "react"

export default function addPlayers(){
  const [timeSelecionado, userTimeS] = useState(null)

  const actionSelecionar = (id)=>{ // function for alter class in Images
    userTimeS((prevState) => (prevState === id ? null : id));
  }

  return(
    <main className={styleAddP.main}>
      <Header pageAddPlayer={true}/>
      <h1 className={styleAddP.h1_adiciona_part}>Adicionar participante</h1>

      <section className={styleAddP.section_inputs}>
        <InputBar text="Nome" width={312} placeholder={"arradador42"}/>
        <InputBar text="Senha" width={312} placeholder={"$textd123"}/>
        <div className={styleAddP.div_imput_checkbox}>
          <InputBar text="Saldo" placeholder={"$R12.996"}/>
          <div className={styleAddP.div_checkbox_p}>
            <span className={styleAddP.span_checkbox}>
              <input className={styleAddP.checkbox} type="checkbox" />
            </span>
            <p className={styleAddP.p_e_um_banco}>É um banco?</p>
          </div>
        </div>
        <p className={styleAddP.p_equipe}>Equipe</p>
        <div className={styleAddP.div_icons_equipe}>
          <Image onClick={() => actionSelecionar(1)} id={1} className={`${styleAddP.imgs_team} ${timeSelecionado === 1? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/team1.png'}/>
          <Image onClick={() => actionSelecionar(2)} id={2} className={`${styleAddP.imgs_team} ${timeSelecionado === 2? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/team2.png'}/>
          <Image onClick={() => actionSelecionar(3)} id={3} className={`${styleAddP.imgs_team} ${timeSelecionado === 3? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/team3.png'}/>
          <Image onClick={() => actionSelecionar(4)} id={4} className={`${styleAddP.imgs_team} ${timeSelecionado === 4? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/team4.png'}/>
          <Image onClick={() => actionSelecionar(5)} id={5} className={`${styleAddP.imgs_team} ${timeSelecionado === 5? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/team5.png'}/>
          <Image onClick={() => actionSelecionar(6)} id={6} className={`${styleAddP.imgs_team} ${timeSelecionado === 6? styleAddP.time_selecionado : ""}`} width={48} height={48} src={'/images/team/team6.png'}/>
        </div>
      </section>
    </main>
  )
}