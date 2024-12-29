import Titulo from "../Titulo"
import styles from "./Banner.module.css"

function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.container_description}>
                <h2>Un corte con estilo urbano</h2>
                <p>Transformamos tu estilo. Realzamos tu personalidad. Cada detalle cuenta.</p>
                <p>Descubre el estilo de corte que marca tu imagen </p>
            </div>
            
        </div>
    )
}

export default Banner