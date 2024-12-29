import styles from "./CardHome.module.css"

import image1 from "./dronTermico.jpg"

function CardHome(props){
    return(
        <section className={styles.card}>
            <div className={styles.container_img}>
                {/* <img src={image1}></img> */}
                <img src={props.imagen}></img>
            </div>
            <div className={styles.container_descripcion}>
            <h2>{props.titulo}</h2>
            <p>{props.descripcion}</p>
            </div>
        </section>
    )
}

export default CardHome