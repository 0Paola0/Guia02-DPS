import React, { useState } from 'react';
import styles from "./page.module.css"

  const ConversorTemperatura = () => {
  const [temperatura, setTemperatura] = useState('');
  const [unidad, setUnidad] = useState('Celsius');
  const [resultado, setResultado] = useState(null);

  const handleTemperaturaChange = (e) => {
    setTemperatura(e.target.value);
  };

  const handleUnidadChange = (e) => {
    setUnidad(e.target.value);
  };

  const convertirTemperatura = () => {
    if (temperatura === '') return;

    let tempConvertida;
    if (unidad === 'Celsius') {
      tempConvertida = (temperatura * 9/5) + 32; 
      setResultado(`${temperatura} °C = ${tempConvertida} °F`);
    } else {
      tempConvertida = (temperatura - 32) * 5/9; 
      setResultado(`${temperatura} °F = ${tempConvertida} °C`);
    }
  };

  return (
    <div>
      <h1>Conversor de Temperatura</h1>
      
      <div>
        <label htmlFor="temperatura">Temperatura:</label>
        <input
          type="number"
          className={styles.temperatura}
          value={temperatura}
          onChange={handleTemperaturaChange}

        />
      </div>

      <div>
        <label htmlFor="unidad">Selecciona la unidad:</label>
        <select className={styles.unidad}
          value={unidad}
          onChange={handleUnidadChange}
        >
          <option value="Celsius">Celsius a Fahrenheit</option>
          <option value="Fahrenheit">Fahrenheit a Celsius</option>
        </select>
      </div>

      <button className={styles.boton} onClick={convertirTemperatura}>Convertir</button>

      {resultado && <p className={styles.resul}>{resultado}</p>}
    </div>
  );
};

export default ConversorTemperatura;
