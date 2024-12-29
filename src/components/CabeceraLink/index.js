import { Link } from "react-router-dom"
import styles from "./CabeceraLink.module.css"

function CabeceraLink(props){
    return (
        <div className={styles.container}>
            <Link to={props.url} className={styles.link}>
                {props.children}
            </Link>
        </div>
    )
}

export default CabeceraLink