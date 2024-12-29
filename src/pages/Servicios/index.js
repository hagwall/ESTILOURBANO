
import ServiciosBarberia from "../../components/ServiciosContenedor";
import Titulo from "../../components/Titulo";
import styles from "./Servicios.module.css"

function Servicios(){
    
    return(
        <>
        <div className={styles.titulo}>
        
        <Titulo >
            <h1>Nuestros servicios </h1>
            <p>Contamos con los servicios de alta calidad</p>
        </Titulo>
        </div>
        <ServiciosBarberia/>
        {/* <section className={styles.container_card}>
   
        </section> */}
       
        </>
    )
}

export default Servicios