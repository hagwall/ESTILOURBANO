import styles from "./ProductosContenedor.module.css";

function ListaProductos() {
  const productos = [
    {
      id: 1,
      titulo: "JRL ONIX FF 2020C-B",
      descripcion: "La máquina Profesional inalámbrica recorta Pelo",
      precio: "220 Bs",
      imagen: "/img/producto/maquinaJRF.jpg",
    },
    {
      id: 2,
      titulo: "Shine Wax The 67 Bagsy",
      descripcion: "Cera Brillo ideal para moldear tu cabello dandole una Alta Fijación y un efecto BRILLO",
      precio: "70 Bs",
      imagen: "/img/producto/nishman.webp",
    },
    {
      id: 3,
      titulo: "novon profesional",
      descripcion: "Cera Mate fijadora para el pelo de 150ml Fijación Fuerte",
      precio: "150 Bs",
      imagen: "/img/producto/nomon.webp",
    },
    {
      id: 4,
      titulo: "Kuul Men",
      descripcion: "Tinte para Barba con Ácido Hialurónico para pelo Negro",
      precio: "30 Bs",
      imagen: "/img/producto/tintekuul.jpg",
    },
  ];

  return (
    <div className={styles.productosContainer}>
        <div className={styles.productosGrid}>
            {productos.map(producto => (
                 <div key={producto.id} className={styles.productoCard}>
                    <div className={styles.productoInfo}>
                        <h3 className={styles.productoTitulo}>{producto.titulo}</h3>
                        <p className={styles.productoDescripcion}>{producto.descripcion}</p>
                    </div>
                    <div className={styles.productoImagenContainer}>
                        <img
                            src={producto.imagen}
                            alt={producto.titulo}
                            className={styles.productoImagen}
                        />
                    </div>
                    <div className={styles.productoPrecioContainer}>
                        <span className={styles.productoPrecio}>{producto.precio}</span>
                    </div>
                 </div>
            ))}
           
        </div>
    </div>
  )
}

export default ListaProductos;
