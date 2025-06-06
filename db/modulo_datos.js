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
        {
            id: 4,
            nombre_producto: "Land‑Dweller",
            descripcion: "Reinventar el presente para escribir el futuro. Con un calibre a la vanguardia de la innovación y con un diseño único, el Oyster Perpetual Land‑Dweller, presentado en 2025, es un hito fundamental en la historia de los relojes Rolex.",
            imagen: "/images/rolex/rolex-5.avif",            
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
        {
            id: 5,
            nombre_producto: "Datejust 36",
            descripcion: "Oyster, 36 mm, acero Oystersteel y oro blanco Referencia 126234",
            imagen: "/images/rolex/rolex-6.avif",            
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
        {
            id: 6,
            nombre_producto: "oyster perpetual 41",
            descripcion: "Oyster Perpetual 41 con una esfera verde pistacho y un brazalete Oyster.",
            imagen: "/images/rolex/rolex-7.avif",            
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
        {
            id: 7,
            nombre_producto: "Rolex Deepsea",
            descripcion: "Oyster Perpetual Rolex Deepsea en oro amarillo de 18 quilates, con disco de bisel Cerachrom en cerámica azul y brazalete Oyster.",
            imagen: "/images/rolex/rolex-8.avif",            
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
        {
            id: 8,
            nombre_producto: "Explorer II",
            descripcion: "Este Oyster Perpetual Explorer II en acero Oystersteel con brazalete Oyster presenta una esfera blanca con una aguja 24 horas en forma de flecha e índices con visualización Chromalight.",
            imagen: "/images/rolex/rolex-9.avif",            
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
        {
            id: 9,
            nombre_producto: "1948",
            descripcion: "El Perpetual 1908 presenta una caja de 39 mm en platino con correa de piel de aligátor.",
            imagen: "/images/rolex/rolex-10.avif",            
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