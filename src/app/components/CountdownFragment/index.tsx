'use client';

import { styles } from "./styles";

interface CountdownFragmentProps {
  countdown: Number,
  label: string,
}

export const CountdownFragment = (props: CountdownFragmentProps) => {
  const countdown = props.countdown === 0 ? '00' : `${props.countdown}`;
  const label = props.label || "";
  return (
  <div className={styles.wrapper}>
    <div className={styles.numberContainer}>
      <h1 className={styles.countNumber}>{countdown}</h1>
    </div>
    <label className={styles.label}>{label}</label>
  </div>
  )
}
