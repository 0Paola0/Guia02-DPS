"use client";
import React from "react";
import styles from "./page.module.css";
import ConversorTemperatura from './ConversorTemperatura';

export default function Home() {
  return (
    <div className={styles.page}>
      <ConversorTemperatura />
     
    </div>
  );
}

