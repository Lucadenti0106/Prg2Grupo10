const moduloDatos = {
    usuario: {
          id: 1,
          email: "agustin@gmail.com",
          contrasenia: "1234",
          fecha_nacimiento: "1995-06-15",
          dni: 12345678,
          foto_perfil: "/images/users/default-image.png",
          createdAt: "2024-04-07T12:00:00Z",
          updatedAt: "2024-04-07T12:00:00Z"
    },
    productos: [
        {
            id: 1,
            nombre: "Cafetera moulinex",
            descripcion: "Cafetera de especialidad",
            imagen: "/images/products/img-cafetera-moulinex.jpg",
            comentarios: [
                {
                    usuario: "usuario1",
                    texto: "Excelente producto, muy satisfecho con la compra",
                    puntaje: 5,
                    foto_perfil: "/images/users/user-1.png"
                },
                {
                    usuario: "usuario2",
                    texto: "Buena relación calidad-precio",
                    puntaje: 4,
                    foto_perfil: "/images/users/user-2.png"
                }
            ]
        },
        {
            id: 2,
            nombre: "Auriculares inalámbricos ABC",
            descripcion: "Con cancelación de ruido y hasta 20 horas de batería",
            imagen: "/images/products/img-cafetera-moulinex.jpg",            
            comentarios: [
                {
                    usuario: "usuario3",
                    texto: "El sonido es increíble, los uso todo el día",
                    puntaje: 5,
                    foto_perfil: "/images/users/user-1.png"
                },
                {
                    usuario: "usuario1",
                    texto: "Cómodos pero podrían tener mejor micrófono",
                    puntaje: 3,
                    foto_perfil: "/images/users/user-2.png"
                }
            ]
        },
        {
            id: 3,
            nombre: "Notebook Ultra 15",
            descripcion: "Ligera y potente, ideal para estudiantes y profesionales",
            imagen: "/images/products/img-cafetera-moulinex.jpg",            
            comentarios: [
                {
                    usuario: "usuario4",
                    texto: "Muy rápida, arranca en segundos",
                    puntaje: 5,
                    foto_perfil: "/images/users/user-1.png"
                },
                {
                    usuario: "usuario2",
                    texto: "Le falta algo de duración de batería",
                    puntaje: 4,
                    foto_perfil: "/images/users/user-2.png"
                }
            ]
        },
        {
            id: 4,
            nombre: "Smartwatch FitLife",
            descripcion: "Controla tu actividad diaria y monitorea tu salud",
            imagen: "/images/products/img-cafetera-moulinex.jpg",            
            comentarios: [
                {
                    usuario: "usuario5",
                    texto: "Excelente para entrenar, liviano y práctico",
                    puntaje: 5,
                    foto_perfil: "/images/users/user-1.png"
                },
                {
                    usuario: "usuario3",
                    texto: "Muy buena app complementaria",
                    puntaje: 4,
                    foto_perfil: "/images/users/user-2.png"
                }
            ]
        },
        {
            id: 5,
            nombre: "Cámara deportiva 4K",
            descripcion: "Ideal para aventuras extremas y grabaciones en movimiento",
            imagen: "/images/products/img-cafetera-moulinex.jpg",            
            comentarios: [
                {
                    usuario: "usuario6",
                    texto: "Imágenes nítidas incluso bajo el agua",
                    puntaje: 5,
                    foto_perfil: "/images/users/user-1.png"
                },
                {
                    usuario: "usuario1",
                    texto: "La batería dura menos de lo que esperaba",
                    puntaje: 3,
                    foto_perfil: "/images/users/user-2.png"
                }
            ]
        },
        {
            id: 6,
            nombre: "Tablet Pro 11",
            descripcion: "Pantalla brillante y alto rendimiento para multitareas",
            imagen: "/images/products/img-cafetera-moulinex.jpg",            
            comentarios: [
                {
                    usuario: "usuario4",
                    texto: "Ideal para dibujar con el stylus",
                    puntaje: 5,
                    foto_perfil: "/images/users/user-1.png"
                },
                {
                    usuario: "usuario7",
                    texto: "Un poco cara, pero cumple",
                    puntaje: 4,
                    foto_perfil: "/images/users/user-2.png"
                }
            ]
        },
        {
            id: 7,
            nombre: "Teclado mecánico RGB",
            descripcion: "Diseñado para gamers, con retroiluminación personalizable",
            imagen: "/images/products/img-cafetera-moulinex.jpg",            
            comentarios: [
                {
                    usuario: "usuario8",
                    texto: "Las teclas son muy suaves y se sienten pro",
                    puntaje: 5,
                    foto_perfil: "/images/users/user-1.png"
                },
                {
                    usuario: "usuario2",
                    texto: "El RGB es un poco exagerado, pero me gusta",
                    puntaje: 4,
                    foto_perfil: "/images/users/user-2.png"
                }
            ]
        },
        {
            id: 8,
            nombre: "Monitor 27'' 2K",
            descripcion: "Colores vivos y resolución perfecta para diseño gráfico",
            imagen: "/images/products/img-cafetera-moulinex.jpg",            
            comentarios: [
                {
                    usuario: "usuario9",
                    texto: "Gran calidad de imagen y fácil configuración",
                    puntaje: 5,
                    foto_perfil: "/images/users/user-1.png"
                },
                {
                    usuario: "usuario6",
                    texto: "Sería mejor con más puertos",
                    puntaje: 4,
                    foto_perfil: "/images/users/user-2.png"
                }
            ]
        },
        {
            id: 9,
            nombre: "Mouse ergonómico inalámbrico",
            descripcion: "Diseñado para largas horas de trabajo sin molestias",
            imagen: "/images/products/img-cafetera-moulinex.jpg",            
            comentarios: [
                {
                    usuario: "usuario3",
                    texto: "Desde que lo uso me duele menos la muñeca",
                    puntaje: 5,
                    foto_perfil: "/images/users/user-1.png"
                },
                {
                    usuario: "usuario5",
                    texto: "Buena precisión, aunque es algo grande",
                    puntaje: 4,
                    foto_perfil: "/images/users/user-2.png"
                }
            ]
        },
        {
            id: 10,
            nombre: "Cargador rápido USB-C",
            descripcion: "Carga tu teléfono al 100% en menos de una hora",
            imagen: "/images/products/img-cafetera-moulinex.jpg",            
            comentarios: [
                {
                    usuario: "usuario10",
                    texto: "Carga rapidísimo y no se calienta",
                    puntaje: 5,
                    foto_perfil: "/images/users/user-1.png"
                },
                {
                    usuario: "usuario8",
                    texto: "Muy útil para viajes",
                    puntaje: 5,
                    foto_perfil: "/images/users/user-2.png"
                }
            ]
        }
    ]
};

module.exports = moduloDatos;