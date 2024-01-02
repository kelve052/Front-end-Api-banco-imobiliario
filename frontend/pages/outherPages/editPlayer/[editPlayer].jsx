import Header from '@/components/Header/header'
import styleEdicao from './editPlayer.module.css'
import { useRouter } from 'next/router'
import CardPlayerSetings from '@/components/cardPlayerSettings/cardPlayerSttings'
import InputBar from '@/components/inputBar/inputBar'
import Image from 'next/image'
import { useState } from 'react'

export default function Edicao(){
  const url = useRouter().query.edicao
  const [teamSelecionado, setTeamSelecionado] = useState(null);
  const actionSelecionar = (id) => {
      setTeamSelecionado((prevState) => (prevState === id ? null : id));
    };



  return(
    <section className={styleEdicao.section_global}>
      <Header iconAction={3}/>
      <main className={styleEdicao.main}>
        <div className={styleEdicao.div_editar_jogador}>
          <h1 className={styleEdicao.h1_editar_jogador}>Editar Jogador</h1>
          <CardPlayerSetings styleComponent={4} balance='100.000,00' name='B$Blackstone' img='/images/team/teamBanco.png'/>
        </div>
        <div className={styleEdicao.div_inputs_edicao}>
        <InputBar name='nome' text="Nome" width={312} placeholder={"arradador42"} />
        <InputBar  name='senha' text="Senha" width={312} placeholder={"$textd123"} />
        <InputBar name='' text="Saldo" placeholder={"$R12.996"} />
        </div>
        <p className={styleEdicao.p_equipe}>Equipe</p>
        {url && url.startsWith('editbanco')?
        (
        <div className={styleEdicao.div_icons_equipe}>
          <Image  onClick={() => actionSelecionar(7)} id={7} className={`${styleEdicao.imgs_team} ${teamSelecionado === 7 ? styleEdicao.time_selecionado : ""}`} width={48} height={48} src={'/images/team/teamBanco.png'} />
        </div>
        )
        :
        (
        <div className={styleEdicao.div_icons_equipe}>
          <Image onClick={() => actionSelecionar(1)} id={1} className={`${styleEdicao.imgs_team} ${teamSelecionado === 1 ? styleEdicao.time_selecionado : ""}`} width={48} height={48} src={'/images/team/team1.png'} />
          <Image onClick={() => actionSelecionar(2)} id={2} className={`${styleEdicao.imgs_team} ${teamSelecionado === 2 ? styleEdicao.time_selecionado : ""}`} width={48} height={48} src={'/images/team/team2.png'} />
          <Image onClick={() => actionSelecionar(3)} id={3} className={`${styleEdicao.imgs_team} ${teamSelecionado === 3 ? styleEdicao.time_selecionado : ""}`} width={48} height={48} src={'/images/team/team3.png'} />
          <Image onClick={() => actionSelecionar(4)} id={4} className={`${styleEdicao.imgs_team} ${teamSelecionado === 4 ? styleEdicao.time_selecionado : ""}`} width={48} height={48} src={'/images/team/team4.png'} />
          <Image onClick={() => actionSelecionar(5)} id={5} className={`${styleEdicao.imgs_team} ${teamSelecionado === 5 ? styleEdicao.time_selecionado : ""}`} width={48} height={48} src={'/images/team/team5.png'} />
          <Image onClick={() => actionSelecionar(6)} id={6} className={`${styleEdicao.imgs_team} ${teamSelecionado === 6 ? styleEdicao.time_selecionado : ""}`} width={48} height={48} src={'/images/team/team6.png'} />
        </div>
        )
        }
      </main>
    </section>
  )
}