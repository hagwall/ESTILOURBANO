import CardEquipo from "../../components/Card/CardEquipo"
import Titulo from "../../components/Titulo"
import styles from "./Reportes.module.css"

function Equipos(){
    const equipoData = [
        {
            id: 1,
            nombre: "Manuel Q.",
            cargo: "Director",
            imagen: "/img/equipo/manuel.jpeg"
        },
        {
            id: 2,
            nombre: "Carlos Rodriguez",
            cargo: "Master Barber",
            imagen: "/img/equipo/carlos.jpeg"
        },
        {
            id: 3,
            nombre: "Miguel Lopez",
            cargo: "Barbero Profesional",
            imagen: "/img/equipo/miguel.jpeg"
        },
        {
            id: 4,
            nombre: "Carlos Rodriguez",
            cargo: "Master Barber",
            imagen: "/img/equipo/carlos.jpeg"
        },
        {
            id: 5,
            nombre: "Miguel Lopez",
            cargo: "Barbero Profesional",
            imagen: "/img/equipo/miguel.jpeg"
        }
    ]
    return(
        <section className={styles.equipoContainer}>
        <Titulo className={styles.equipoTitle}>
            <h1>Nuestro equipo</h1>
        </Titulo>
        <div className={styles.equipoGrid}>
            {equipoData.map(miembro =>(
                 <CardEquipo
                 key={miembro.id}  
                 imagen={miembro.imagen}
                 nombre={miembro.nombre}
                 cargo={miembro.cargo}
             />
            ))}
           
        </div>
        </section>
    )
}

export default Equipos