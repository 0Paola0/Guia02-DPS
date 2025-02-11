"use client";
import React from "react";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [contador, setCount] = useState(0)

  return (
    <main className={styles.main}>
    <h1 className={styles.titulo}>Contador React</h1>
    <h1>{contador}</h1>
    <button id={styles.aumentar} onClick={() => setCount((contador) => contador + 1)}>Aumentar</button>
    <button id={styles.resetear} onClick={() => setCount((contador) => contador = 0)}>Resetear</button>
    <button id={styles.disminuir} onClick={() => setCount((contador) => contador - 1)}>Disminuir</button>  
    </main>

  );
}
