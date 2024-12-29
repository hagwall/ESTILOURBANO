import styles from "./CardEquipo.module.css"

function CardEquipo(props){
    return (
        <>
        <div className={styles.equipoContainer}>
            <div className={styles.equipoContainerImagen}>
            <img className={styles.equipoImagen}
                src={props.imagen}
                alt={props.nombre}
            />
            </div>
            <div className={styles.equipoContainerDetalle}>
                <h4 className={styles.equipoNombre}>{props.nombre}</h4>
                <span className={styles.equipoCargo}>{props.cargo}</span>    
            </div>  
        </div>
        </>
    )
}

export default CardEquipo