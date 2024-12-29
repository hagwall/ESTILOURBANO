import Banner from "../../components/Banner";
import ListaProductos from "../../components/ProductosContenedor";

import Titulo from "../../components/Titulo";
import styles from "./Experiencias.module.css"


function Productos(){

    const cardData = {
        imagen: 'imagen',
        titulo: 'UAS y quipos de tecnologia asociado',
        descripcion: 'aqui describiremos',
        requisitos: [
            'Requisito 1',
            'Requisito 2',
            'Requisito 3',
        ],
    };
    return (
        <>
        <Titulo>
            <h1>Nuestros Productos</h1>
            <p>revisa nuestro catalogos de productos </p>
        </Titulo>
        <ListaProductos/>
       
        </>
    )
}

export default Productos