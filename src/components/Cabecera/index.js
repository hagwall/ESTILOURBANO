import { Link, useLocation } from "react-router-dom"
import styles from "./Cabecera.module.css"
import CabeceraLink from "../CabeceraLink"
// import logo from "/img/LOGO.png"
import { useEffect, useState } from "react"
import './Cabecera.module.css'

function Cabecera(){

    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if( offset > 50){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () =>{
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isHomePage = location.pathname === '/';
    const cabeceraTotalClass = `cabecera ${isScrolled ? 'cabecera-scrolled' : ''} ${!isHomePage ? 'cabecera-other-page' : ''}`;
    return(
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoDrone}>
                    <img src="/img/LOGO.png" alt="logoDrone"></img>
                </section>
            </Link>
            <nav className={styles.cabecera_nav}>
                <CabeceraLink url="./">
                    INICIO
                </CabeceraLink>
                <CabeceraLink url="./servicios">
                    SERVICIOS
                </CabeceraLink>
                <CabeceraLink url="./productos">
                    PRODUCTOS
                </CabeceraLink>
                <CabeceraLink url="./contacto">
                    CONTACTO
                </CabeceraLink>
                <CabeceraLink url="./equipo">
                    EQUIPO
                </CabeceraLink>
                <CabeceraLink url="./resultados">
                    RESULTADOS
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera