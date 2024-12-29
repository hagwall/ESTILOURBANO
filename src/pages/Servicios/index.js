import CardServicios from "../../components/Card/CardServicios";
import ServiciosBarberia from "../../components/ServiciosContenedor";
import Titulo from "../../components/Titulo";
import styles from "./Servicios.module.css"

function Servicios(){
    const items = ['Actividades de fotografia', 'Cartografia', 'fotogrametria', 'modelo 3D', 'videograbacion'];
    const items1 = ['Item uno', 'Item dos', 'Item tres'];

    const manejoBotonCLick = ()=>{
        console.log('Button Clicked')
        // window.location.href = '/contacto'
    }
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