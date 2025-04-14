const moduloDatos = {
    usuario: {
          id: 1,
          email: "agustin@gmail.com",
          usuario: "Agustin",
          contrasenia: "1234",
          fecha_nacimiento: "1995-06-15",
          dni: 12345678910,
          foto_perfil: "/images/users/default-image.png"
    },
    productos: [
        {
            id: 0,
            nombre_producto: "GMT-Master II",
            descripcion: "Mismo material, mismo color, mismo lustre. El rostro y el bisel de la nueva versión del Oyster Perpetual GMT‑Master II en oro blanco de 18 quilates muestran una continuidad sin parangón.",
            imagen: "/images/rolex/rolex-1.avif",
            comentarios: [
                {
                    usuario: "usuario1",
                    texto: "El diseño es audaz, elegante y exclusivo",
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
            nombre_producto: "Oyster Perpetual",
            descripcion: "La suavidad de un tono lavanda, la calidez de un beis arena, la frescura de un verde pistacho.",
            imagen: "/images/rolex/rolex-2.avif",            
            comentarios: [
                {
                    usuario: "usuario3",
                    texto: "Producto de mucha calidad",
                    puntaje: 5,
                    foto_perfil: "/images/users/user-1.png"
                },
                {
                    usuario: "usuario1",
                    texto: "Muy buen reloj a buen precio",
                    puntaje: 3,
                    foto_perfil: "/images/users/user-2.png"
                }
            ]
        },
        {
            id: 2,
            nombre_producto: "1908",
            descripcion: "Pocas veces el oro macizo ha generado tal sensación de flexibilidad y ligereza al llevarlo puesto.",
            imagen: "/images/rolex/rolex-3.avif",            
            comentarios: [
                {
                    usuario: "usuario4",
                    texto: "Excelente reloj muy contento contento con la compra!",
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
            nombre_producto: "Datejust",
            descripcion: "Como un sol cuyos rayos iluminan el crepúsculo, la esfera del nuevo Oyster Perpetual Datejust 31 regala a la vista una comunión entre luces y sombras.",
            imagen: "/images/rolex/rolex-4.avif",            
            comentarios: [
                {
                    usuario: "usuario5",
                    texto: "Modelo divertido y color elegante",
                    puntaje: 5,
                    foto_perfil: "/images/users/user-1.png"
                },
                {
                    usuario: "usuario3",
                    texto: "Buen diseño y útil para ir al agua, rolex nunca me falla",
                    puntaje: 4,
                    foto_perfil: "/images/users/user-2.png"
                }
            ]
        },
    ]
};

module.exports = moduloDatos;