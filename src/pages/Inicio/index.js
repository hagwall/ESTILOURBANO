import Banner from "../../components/Banner"
import CardHome from "../../components/Card/CardHome"
import CardInicio from "../../components/Card/CardInicio"
import Titulo from "../../components/Titulo"
import corteEstilo from "../Inicio/img/corte.jpeg"
import tratoCordial from "../Inicio/img/corte1.jpeg"
import corteEstilo2 from "../Inicio/img/corte2.jpeg"
import equipo from "../Inicio/img/equipo.jpeg"
import droneVigilancia from "./droneVigilancia.webp"
import styles from "./Inicio.module.css"
function Inicio(){
    return(
      <>
        
        <Banner/>
        
        < section className={styles.seccionCards}>
      
        <Titulo className={styles.tituloSeccion}><h2 className={styles.titulo}>TE BRINDAMOS</h2></Titulo>
        
        <CardInicio 
        imageSrc={corteEstilo2}
        description="En nuestra barbería, te recibimos siempre con una sonrisa, creando un ambiente cálido y acogedor. Nuestro objetivo es que te sientas como en casa, disfrutando de una experiencia relajante y placentera cada vez que nos visitas." 
        titulo="UN TRATO CORDIAL Y AMENO"
      />

      <Titulo><h2>TE OFRECEMOS</h2></Titulo>
      <CardInicio 
        imageSrc={tratoCordial} 
        description="Nuestros estilistas o barberos están siempre al tanto de las últimas tendencias y técnicas en cortes de cabello. Te ofrecemos servicios personalizados que se adaptan a tu estilo y personalidad, asegurándonos de que salgas luciendo y sintiéndote espectacular." 
        imagePosition="right"
        titulo="SERVICIOS DE CORTES CON ESTILO"
      />

      <Titulo><h2>TENEMOS</h2></Titulo>
      <CardInicio
      imageSrc={corteEstilo}
      description="Contamos con un equipo de profesionales altamente capacitados y con años de experiencia en el arte del cuidado masculino. Nos dedicamos a perfeccionar cada detalle de tu look, garantizando resultados excepcionales y consistentes."
      titulo="EQUIPO PROFESIONALES Y CON EXPERIENCIA"
      />
      <Titulo><h2>CONTAMOS</h2></Titulo>
      <CardInicio
      imageSrc={equipo}
      description="Disponemos de una amplia gama de productos de alta calidad para el cuidado de tu cabello y barba. Elegidos cuidadosamente, nuestros productos aseguran que mantengas tu estilo y salud capilar en su mejor estado, incluso fuera de nuestra barbería."
      imagePosition="right"
      titulo="PRODUCTOS PARA TU CUIDADO PERSONAL"
      />
        </section>
        </>
    )
}

export default Inicio