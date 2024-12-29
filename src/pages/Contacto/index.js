

import Ubicacion from "../../components/UbicacionContenedor"
import styles from "./Contacto.module.css"


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