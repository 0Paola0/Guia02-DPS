"use client";
import styles from "./page.module.css";
import Formulario from "./componentes/Formulario";
import Home from "./componentes/Home";
import { useState } from "react";
import React from "react";

export default function Page() {
  const [user, setUser] = useState([])
  return (
    <div className={styles.page}>
      {
        !user.length > 0 
        ? <Formulario setUser={setUser}/>
        : <Home user={user} setUser={setUser}/>
      } 
    </div>
  );
}
