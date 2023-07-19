const products = [
   {
      "id": 1,
      "nombre": "Visita Tecnica",
      "categoria": "Visita",
      "precio": 5000,
      "stock":1000,
      "ImagenURL": "https://thumbs.dreamstime.com/b/checklist-sheet-paper-flat-vector-cartoon-illustration-objects-isolated-white-background-check-list-icon-108257866.jpg",
      "Descripcion": "Visita técnica especializada para evaluación y diagnóstico de reparaciones"
    },
    {
      "id": 2,
      "nombre": "Regulación Cambios",
      "categoria": "Cuadro",
      "precio": 4500,
      "stock":1000,
      "ImagenURL": "https://media.wd40.es/app/uploads/2020/12/19151618/como-ajustar-cambios-bici.jpeg",
      "Descripcion": "Cambia de marcha sin problemas: Servicio de regulación de cambios para una experiencia de ciclismo suave y sin esfuerzo"
    },
    {
      "id": 3,
      "nombre": "Ajuste de frenos",
      "categoria": "Piezas",
      "precio": 3500,
      "stock":100,
      "ImagenURL": "https://tuvalum.com/blog/wp-content/uploads/2021/04/Mecanico-reparando-frenos.jpg",
      "Descripcion": "Detente con confianza: Servicio de ajuste de frenos para una frenada segura y efectiva en tu bicicleta"
    },
    {
      "id": 4,
      "nombre": "Servicio a Domicilio",
      "categoria": "visita",
      "precio": 10000,
      "stock":1000,
      "ImagenURL": "https://blog.montenbaik.com/wp-content/uploads/2022/02/004__Mobile_1280x1200_Delivery-501x469.jpg",
      "Descripcion": "Comodidad a tu puerta: Servicio de mantenimiento y reparación de bicicletas a domicilio para una experiencia de ciclismo sin interrupciones"
    },
    {
      "id": 5,
      "nombre": "Sangrado Frenos",
      "categoria": "Cuadro",
      "precio": 15000,
      "stock":100,
      "ImagenURL": "https://www.sport.es/bicio/wp-content/uploads/2021/12/Portada-frenos.jpg",
      "Descripcion": "Frenos en óptimas condiciones: Servicio de sangrado de frenos para una frenada potente y confiable en tu bicicleta"
    },
    {
      "id": 6,
      "nombre": "Centrado de Rueda",
      "categoria": "Piezas",
      "precio": 5000,
      "stock":100,
      "ImagenURL": "https://picsum.photos/id/0/600",
      "Descripcion": "Un paseo sin vibraciones: Servicio de alineación o centrado de ruedas para una conducción suave y equilibrada en tu bicicleta"
    },
    {
      "id": 7,
      "nombre": "Cambio de Maza o Piñon",
      "categoria": "Piezas",
      "precio": 25000,
      "stock":50,
      "ImagenURL": "https://challacycling.cl/wp-content/uploads/2020/11/sram-mullet.jpg",
      "Descripcion": "Actualiza tu bicicleta: Servicio de cambio de maza o piñón para una transmisión más eficiente y una experiencia de ciclismo mejorada"
    },
    {
      "id": 8,
      "nombre": "Revisión de Horquillas",
      "categoria": "Piezas",
      "precio": 35000,
      "stock":10,
      "ImagenURL": "https://www.sport.es/bicio/wp-content/uploads/2018/11/horquilla-de-suspension-portada.jpg",
      "Descripcion": "Una suspensión suave y segura: Servicio de revisión de horquillas para una absorción efectiva de impactos y un manejo preciso en terrenos difíciles"
    },
    {
      "id": 9,
      "nombre": "Mantencion Express",
      "categoria": "Mantención",
      "precio": 10000,
      "stock":25,
      "ImagenURL": "https://cdn.milenio.com/uploads/media/2018/10/26/pits-de-la-formula-reuters.jpg",
      "Descripcion": "Lubricación de cadena y componentes móviles, ajuste de frenos, verificación de los tornillos y pernos, ajuste de la presión de los neumáticos, limpieza general y verificación de los radios de las ruedas"
    },
    {
      "id": 10,
      "nombre": "Mantencion Basica",
      "categoria": "Mantención",
      "precio": 35000,
      "stock":25,
      "ImagenURL": "https://solobici.es/wp-content/uploads/2019/01/mantenimiento_1.jpg",
      "Descripcion": "Lubricación de cadena y componentes móviles, ajuste de frenos, verificación de los tornillos y pernos, ajuste de la presión de los neumáticos, limpieza general y verificación de los radios de las ruedas"
    },
    {
      "id": 11,
      "nombre": "Mantencion Intermedia",
      "categoria": "Mantención",
      "precio": 45000,
      "stock":25,
      "ImagenURL": "http://bicicletasmiguel.com/wp-content/uploads/2016/09/reparacion-bicicletas-miguel-avila.jpg",
      "Descripcion": "Reemplazo de cables y fundas de frenos y cambios, ajuste de la tensión de los radios, ajuste de la caja de pedalier, reemplazo de pastillas de freno y/o discos, ajuste de la suspensión y limpieza y engrase de los componentes de la dirección"
    },
    {
      "id": 12,
      "nombre": "Mantencion Full",
      "categoria": "Mantención",
      "precio": 55000,
      "stock":6,
      "ImagenURL": "https://www.mdzol.com/u/fotografias/m/2019/12/4/f638x638-3046_61213_5050.jpg",
      "Descripcion": "limpieza completa, reemplazo y ajuste de componentes como cables, frenos y transmisión, ajuste de caja de pedalier y rodamientos, inspección completa de frenos y cambios, ajuste y lubricación de suspensión y dirección, verificación de neumáticos y aplicación de protección"
    }
  ]


export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      },100)
    })
}

export const getProductById = (productId) =>{
  return new Promise((resolve) => {
    setTimeout(()=> {
       resolve(products.find(prod => prod.id === productId))
     }, 300)
  })
}

export const getProductsByCategory = (productCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosFiltrados = products.filter(prod => prod.categoria === productCategoria);
      resolve(productosFiltrados);
    }, 300);
  });
};