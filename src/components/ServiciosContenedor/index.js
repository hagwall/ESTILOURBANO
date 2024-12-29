// ServiciosBarberia.jsx
import React, { useState } from 'react';
import styles from './ServiciosContenedor.module.css';

const ServiciosBarberia = () => {
  const [filtroActivo, setFiltroActivo] = useState('hombres');

  const serviciosHombres = [
    {
      id: 1,
      nombre: "Corte Clásico",
      descripcion: "Corte tradicional con degradado",
      precio: "25 Bs",
      duracion: "30 min",
      imagen: "/img/corte-clasico.jpeg"
    },
    {
      id: 2,
      nombre: "Corte + Barba",
      descripcion: "Incluye corte de pelo y arreglo de barba",
      precio: "30 Bs",
      duracion: "45 min",
      imagen: "/img/corte-barba.jpg"
    },
    {
      id: 3,
      nombre: "Afeitado Tradicional",
      descripcion: "Afeitado con navaja y toalla caliente",
      precio: "15 Bs",
      duracion: "30 min",
      imagen: "/img/degradado.jpg"
    },
    {
      id: 4,
      nombre: "Degradado + Diseño",
      descripcion: "Corte con degradado y diseño personalizado",
      precio: "30 Bs",
      duracion: "45 min",
      imagen: "/img/afeitado.jpg"
    }
  ];

  const serviciosMujeres = [
    {
      id: 1,
      nombre: "Corte Bob",
      descripcion: "Corte estilo bob personalizado",
      precio: "20€",
      duracion: "45 min",
      imagen: "/img/corte-bob.jpg"
    },
    {
      id: 2,
      nombre: "Capas y Textura",
      descripcion: "Corte en capas con texturizado",
      precio: "25€",
      duracion: "45 min",
      imagen: "/img/capas.jpg"
    },
    {
      id: 3,
      nombre: "Corte Pixie",
      descripcion: "Corte corto estilo pixie",
      precio: "20€",
      duracion: "30 min",
      imagen: "/img/pixie.jpg"
    },
    {
      id: 4,
      nombre: "Flequillo",
      descripcion: "Corte o mantenimiento de flequillo",
      precio: "10€",
      duracion: "15 min",
      imagen: "/img/flequillo.jpg"
    }
  ];

  return (
    <div className={styles.serviciosContainer}>
      <div className={styles.filtros}>
        <button 
          className={`${styles.filtroBtn} ${filtroActivo === 'hombres' ? styles.activo : ''}`}
          onClick={() => setFiltroActivo('hombres')}
        >
          CORTES HOMBRES
        </button>
        <button 
          className={`${styles.filtroBtn} ${filtroActivo === 'mujeres' ? styles.activo : ''}`}
          onClick={() => setFiltroActivo('mujeres')}
        >
          CORTES MUJERES
        </button>
      </div>

      <div className={styles.serviciosGrid}>
        {(filtroActivo === 'hombres' ? serviciosHombres : serviciosMujeres).map(servicio => (
          <div key={servicio.id} className={styles.servicioCard}>
            <div className={styles.servicioImagenContainer}>
              <img
                src={servicio.imagen}
                alt={servicio.nombre}
                className={styles.servicioImagen}
              />
            </div>
            <div className={styles.servicioContenido}>
            <h3 className={styles.servicioTitulo}>{servicio.nombre}</h3>
            <p className={styles.servicioDescripcion}>{servicio.descripcion}</p>
            <div className={styles.servicioDetalles}>
              <span className={styles.servicioPrecio}>{servicio.precio}</span>
              <span className={styles.servicioDuracion}>{servicio.duracion}</span>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiciosBarberia;