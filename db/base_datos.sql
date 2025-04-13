CREATE SCHEMA proyecto_integrador_db;

USE proyecto_integrador_db;

CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE,
    contrasenia VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    dni INT NOT NULL UNIQUE,
    foto_perfil VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	id_usuario INT UNSIGNED NOT NULL,
    imagen_producto TEXT NOT NULL,
	nombre_producto VARCHAR(50) NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	comentario VARCHAR(100) NOT NULL,
	id_producto INT UNSIGNED,
	id_usuario INT UNSIGNED,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
	FOREIGN KEY (id_producto) REFERENCES productos(id)
);



USE proyecto_integrador_db;

INSERT INTO usuarios (email, contrasenia, fecha_nacimiento, dni, foto_perfil) VALUES
('agustin@gmail.com', '1234', '1995-06-15', 12345678, '/images/users/default-image.png'),
('usuario1@gmail.com', '1234', '1996-05-20', 22345678, '/images/users/user-1.png'),
('usuario2@gmail.com', '1234', '1997-07-22', 32345678, '/images/users/user-2.png'),
('usuario3@gmail.com', '1234', '1994-08-18', 42345678, '/images/users/user-3.png'),
('usuario4@gmail.com', '1234', '1993-02-10', 52345678, '/images/users/user-4.png');

INSERT INTO productos (id_usuario, imagen_producto, nombre_producto) VALUES
(1, '/images/rolex/rolex-1.avif', 'GMT-Master II'),
(1, '/images/rolex/rolex-2.avif', 'Oyster Perpetual'),
(1, '/images/rolex/rolex-3.avif', '1908'),
(1, '/images/rolex/rolex-4.avif', 'Datejust'),
(1, '/images/rolex/rolex-5.avif', 'Explorer'),
(1, '/images/rolex/rolex-6.avif', 'Submariner'),
(1, '/images/rolex/rolex-7.avif', 'Sea-Dweller'),
(1, '/images/rolex/rolex-8.avif', 'Sky-Dweller'),
(1, '/images/rolex/rolex-9.avif', 'Milgauss'),
(1, '/images/rolex/rolex-10.avif', 'Cellini');

INSERT INTO comentarios (comentario, id_producto, id_usuario) VALUES
('Excelente producto, muy satisfecho con la compra', 1, 2),
('Buena relación calidad-precio', 1, 3),
('Un lujo total, vale cada peso', 1, 4),
('El sonido es increíble, los uso todo el día', 2, 4),
('Cómodos pero podrían tener mejor micrófono', 2, 2),
('Me sorprendió lo livianos que son', 2, 5),
('Muy rápida, arranca en segundos', 3, 3),
('Le falta algo de duración de batería', 3, 2),
('El diseño es espectacular', 3, 5),
('Excelente para entrenar, liviano y práctico', 4, 4),
('Muy buena app complementaria', 4, 3),
('Los materiales son de calidad', 4, 5),
('No lo esperaba tan bueno', 5, 2),
('Cumple con todo lo que promete', 5, 3),
('Perfecto para uso diario', 5, 5),
('Compacto y resistente', 6, 3),
('El envío fue rapidísimo', 6, 4),
('Satisfecho con la compra', 6, 5),
('Recomiendo 100%', 7, 2),
('Volvería a comprar sin dudar', 7, 3),
('Muy elegante', 7, 4),
('Buena relación calidad-precio', 8, 2),
('Me encantó el diseño moderno', 8, 5),
('Gran precisión', 8, 3),
('Un reloj distinto, muy original', 9, 4),
('Resistente al uso diario', 9, 3),
('Muy cómodo de usar', 9, 5),
('Regalo ideal', 10, 2),
('Lo compré para mi papá y le encantó', 10, 4),
('Gran detalle en el empaque', 10, 5);
	
