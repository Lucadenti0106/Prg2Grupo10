const moduloDatos = {
    usuario: {
          id: 1,
          email: "agustin@gmail.com",
          usuario: "agustin",
          contrasenia: "1234",
          fecha_nacimiento: "1995-06-15",
          dni: 12345678910,
          foto_perfil: "/images/users/default-image.png",
          createdAt: "2024-04-07T12:00:00Z",
          updatedAt: "2024-04-07T12:00:00Z"
    },
    productos: [
        {
            id: 0,
            nombre_producto: "Cafetera moulinex",
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
            id: 1,
            nombre_producto: "macbook pro 2019",
            descripcion: "Con cancelación de ruido y hasta 20 horas de batería",
            imagen: "/images/products/img-macbook-pro-2019.jpg",            
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
            id: 2,
            nombre_producto: "samsung galaxy s10",
            descripcion: "Ligera y potente, ideal para estudiantes y profesionales",
            imagen: "/images/products/img-samsung-galaxy-s10.jpg",            
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
            id: 3,
            nombre_producto: "samsung smart tv",
            descripcion: "Controla tu actividad diaria y monitorea tu salud",
            imagen: "/images/products/img-tv-samsung-smart.jpg",            
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
    ]
};

module.exports = moduloDatos;