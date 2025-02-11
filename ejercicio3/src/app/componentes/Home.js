"use client";
import React from "react";
import "./Formulario.css";

export default function Home({user, setUser}) {
    const handleLogout = () => {
        setUser([])
    }

    return (
      <div>
        <h1 className="bien">Bienvenid@</h1>
        <h2>{user}</h2>
        <button className="boton" onClick={handleLogout}>Cerrar sesion</button>
        
      </div>
    );
  }