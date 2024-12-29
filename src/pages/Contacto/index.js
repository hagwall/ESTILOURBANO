import Footer from "../../components/Footer"
import Titulo from "../../components/Titulo"
import Ubicacion from "../../components/UbicacionContenedor"
import styles from "./Contacto.module.css"
import qr from "./qrcode-generado.png"

function Contacto(){
    return (
        <>
            <section className={styles.contactoContainer}>
                <h1 className={styles.pageTitle}>Contactanos</h1>
            
                <Ubicacion/>
            </section>
            </>
    )
}

export default Contacto