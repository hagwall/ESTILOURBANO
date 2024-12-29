import styles from "./CardServicios.module.css"
import { CheckCircle2 } from "lucide-react";
import Button from "../../Button";
import Boton from "../../ComponentesForm/Boton";

function CardServicios(props){
    return (
        <div className={styles.card}>
            <div className={styles.card_border}></div>
            <h2>{props.titulo}</h2>
            <hr className={styles.line}/>
            <div className={styles.card_lista}>
                <ul>
                    {props.items.map((item, index) =>(
                        <li key={index} className={styles.card_lista_item}>
                            {/* <span className={styles.check}>
                            <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="check_svg"
        ></svg>
                            </span> */}
                            <CheckCircle2 className={styles.check}/>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.container_boton}>
                
                {/* <Button onclick={props.onButtonClick}>
                    {props.buttonText}
                </Button> */}
                <Boton>Contactar</Boton>
            </div>
        </div>
    )
}

export default CardServicios;