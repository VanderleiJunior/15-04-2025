'use client';

import { countdown } from "@/app/controller/countdown";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import { CountdownFragment } from "@/app/components/CountdownFragment";

interface CountdownProps {
  targetDate: string;
}


export const Home = ({ targetDate }: CountdownProps) => {

  const [timeLeft, setTimeLeft] = useState(countdown(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(countdown(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title} >Contagem regressiva para acabar as despedidas</h1>
      <div className={styles.wrapperCountdown}>
        <CountdownFragment countdown={timeLeft.days} label="Dias"/>
        -
        <CountdownFragment countdown={timeLeft.hours} label="Horas"/>
        -
        <CountdownFragment countdown={timeLeft.minutes} label="Minutos"/>
        -
        <CountdownFragment countdown={timeLeft.seconds} label="Segundos"/>
      </div>
      <h1 className={styles.text}>Te Amo mil milhões ❤️​!!!</h1>
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/2AVIEp1mD4dfajwOC8Tdzk?utm_source=generator"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
}
