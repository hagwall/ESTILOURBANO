import styles from "./paginaContruccion.module.css";
import React from 'react';


const DroneConstructionPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.droneWrapper}>
          <img src="/img/chair.jpg"/>
        </div>
        
        <h1 className={styles.title}>Página de resultados</h1>
        <p className={styles.description}>
          Estamos trabajando para mejorar nuestra sección de resultados. 
          ¡Próximamente tendrás toda la información de los resultados!
        </p>
        
        <div className={styles.featuresBox}>
          <h2 className={styles.featuresTitle}>Próximamente</h2>
          <ul className={styles.featuresList}>
            <li>📡 Registro detallado de los cortes</li>
            <li>🚁 Fotos reales de clientes satisfechos</li>
            <li>📊 novedades</li>
          </ul>
        </div>
        
        <div className={styles.actionWrapper}>
          <a href="/" className={styles.backButton}>
            Volver al Inicio
          </a>
        </div>
      </div>
    </div>
  );
};

export default DroneConstructionPage;