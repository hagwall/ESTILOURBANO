// components/Ubicacion.jsx
import React from 'react';
import styles from './UbicacionContenedor.module.css';
import {FaFacebook, FaInstagram, FaTiktok} from 'react-icons/fa';

const Ubicacion = () => {
  return (
    <div className={styles.contactContainer}>
      
      <div className={styles.infoContainer}>
        <h2 className={styles.titulo}>DESPEJA TUS DUDAS</h2>
        <p className={styles.descripcion}>Escribinos con toda confianza, cualquier duda que tengas contactenos, lo atenderemos los mas pronto posible</p>
        <div className={styles.contactInfo}>
            <div className={styles.qrContainer}>
                <img 
                    src='/img/qrcode-generado.png'
                    alt='whatsApp QR'
                    className={styles.qrCode}
                />
                <p className={styles.qrText}>¡Escanea para agendar!</p>
            </div>
            <div className={styles.horariosDireccion}>
                <div className={styles.horarios}>
                    <h3>horarios</h3>
                    <p>Lunes a Viernes: 09:00 - 21:00</p>
                    <p>Sabados: 09:00 - 20:00</p>
                    <p>Domingos: 10:00 - 18:00</p>
                </div>
                <div className={styles.direccion}>
                    <h3>Direccion</h3>
                    <p>Av San Martin, entre calle Honduras y montes</p>
                    <p>Cochabamba</p>
                    <p>Cel: xxxxxxxxx</p>
                </div>
            </div>
        </div>

        <div className={styles.redesSociales}>
            <h3>Siguenos</h3>
            <div className={styles.redesIconos}>
                <a href='#' className={styles.redSocial}>
                    <FaFacebook/>
                </a>
                <a href='#' className={styles.redSocial}>
                    <FaInstagram/>
                </a>
                <a href='#' className={styles.redSocial}>
                    <FaTiktok/>
                </a>
            </div>
        </div>
      </div>

      <div className={styles.mapaContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.224456165834!2d-66.15592932608865!3d-17.4010126834885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e373593fbe45a3%3A0x1bec49ddc6736809!2sBarberia%20estilo%20urbano!5e0!3m2!1ses!2sbo!4v1735412240408!5m2!1ses!2sbo"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de la barbería"
          className={styles.mapa}
        />
      </div>
    </div>
  );
};

export default Ubicacion;