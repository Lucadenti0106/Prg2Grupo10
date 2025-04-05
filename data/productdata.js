const productData = {
    productos: [
        {
            id: 1,
            nombre: "Smartphone XYZ",
            descripcion: "El último modelo con cámara de alta resolución y batería de larga duración",
            imagen: "/images/products/default-image.png",
            comentarios: [
                {
                    usuario: "usuario1",
                    texto: "Excelente producto, muy satisfecho con la compra",
                    puntaje: 5
                },
                {
                    usuario: "usuario2",
                    texto: "Buena relación calidad-precio",
                    puntaje: 4
                }
            ]
        }
    ]
};

module.exports = productData;
