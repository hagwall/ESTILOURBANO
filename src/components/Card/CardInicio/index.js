// ImageDescription.jsx
import React from 'react';
import styles from "./CardInicio.module.css"

function CardInicio({ 
  imageSrc, 
  description, 
  imagePosition = 'left',
  titulo
}) {
  return (
    <div 
      className={`${styles.imageDescription} ${
        imagePosition === 'left' 
          ? styles.leftImage 
          : styles.rightImage
      }`}
    >
      <img 
        src={imageSrc} 
        alt="Description" 
        className={styles.image}
      />
      <div className={styles.description}>
        <h5>{titulo}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardInicio;