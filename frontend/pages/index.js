import styles from "@/styles/index.module.css";
import Header from "@/components/Header/header";
import Image from "next/image";
import Link from "next/link";
import CardPlayerSetings from "@/components/cardPlayerSettings/cardPlayerSttings";
import Historicy from "@/components/historic/historicy";
import InputBar from "@/components/inputBar/inputBar";
import NavbarOpitions from "@/components/navbarOpitions/navbarOpitions";
import HomeCards from "@/components/HomeCards/homeCards";
import { useEffect, useState } from "react";
import Api from "@/services/playerApi";
import ApiBanco from "@/services/bancoApi";

export default function Home() {
  const [listPlayers, setListaPlayers] = useState([]);
  const [listBanks, setListaBanks] = useState([]);
  const apiPlayer = new Api();
  const apiBanco = new ApiBanco();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiPlayer.listarPlayers();
        setListaPlayers(response.Players);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiBanco.listarBancos();
        setListaBanks(response.Bank);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className={styles.index}>
      <Header />
      <h1 className={styles.h1}>Bem-vindos ao caixa do Banco Imobiliário</h1>
      <p className={styles.p_jogadores}>Jogadores: {listPlayers.length + listBanks.length}</p>
      <div className={styles.div_bloco_cards}>
        {listBanks.map((bank) => (
          <HomeCards
            team={'Banco'}
            name={bank.name}
            balance={bank.balance}
          />
        ))}
        {listPlayers.map((player) => (
          <HomeCards
            team={player.team}
            name={player.name}
            balance={player.balance}
          />
        ))}
      </div>
      <NavbarOpitions color={1} />
    </section>
  );
}
