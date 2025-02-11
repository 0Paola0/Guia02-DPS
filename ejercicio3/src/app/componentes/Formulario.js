"use client";
import "./Formulario.css";
import { useState } from "react";
import React from "react";


export default function Formulario({setUser}) {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (nombre === "" || contraseña === ""){
            setError(true)
            return
        }
        setError(false)
        setUser([nombre])
    }

    return (
        <section className="contenedor">
        <h1 className="titulo">Login</h1>

        <form className="formulario" onSubmit = {handleSubmit}>
            <p>Usuario</p>
            <input type="text" value={nombre} onChange={e => setNombre(e.target.value)}/>
            <p>Contraseña</p>
            <input type="password" value={contraseña} onChange={e => setContraseña(e.target.value)}/>
            <button>Iniciar sesion</button>
        </form>
        {error && <p>Todos los campos son obligatorios</p>}
        </section>
     
    );
  }
  