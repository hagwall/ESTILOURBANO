import styles from "./Footer.module.css";
import { ImFacebook2 } from "react-icons/im";

function Footer(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // minHeight: "100vh",
      }}
    >
      <main style={{ flexGrow: 1 }}>{props.children}</main>

      <footer className={styles.container_footer}>
        <div className={styles.contenido}>
          <div className={styles.footer_grid}>
            <div className={styles.footer_Column}>
              <h4>Nosotros</h4>
              <img src="" />
              <p>Corte Con Estilo</p>
            </div>

            <div className={styles.footer_Column}>
              <h4>Contacto</h4>
              <ul className={styles.footerLinks}>
                <li>Email: info@ejemplo.com</li>
                <li>Teléfono: xxxxxxxxx</li>
                <li>Dirección: Av San Martin entre calle honduras y montes</li>
              </ul>
            </div>

            <div className={styles.footer_Column}>
              <h4>Redes Sociales</h4>
              <span><ImFacebook2 />Facebook</span>
              
            </div>
          </div>
        
        <div className={styles.container_politicas}>
          <div id="copyright">
            <p>&copy; {new Date().getFullYear()} - Barberia Estilo Urbano - Todos los
            derechos reservados</p>
          </div>
          <div className={styles.terminos}>
            <span>Terminos de uso</span>
            <span>Politicas de privacidad</span>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
