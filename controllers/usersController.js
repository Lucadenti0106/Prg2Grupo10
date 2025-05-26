const moduloDatos = require('../db/modulo_datos');
let db = require('../database/models');
let bcrypt = require('bcryptjs');

const usersController = {
    login: function (req, res) {
        
        if (req.session.usuario) {
            return res.redirect('/users/profile');
        }
        return res.render('login', { error: null });
    },
    register: function (req, res) {
        
        if (req.session.usuario) {
            return res.redirect('/users/profile');
        }
        return res.render('register', { error: null });
    },
    prueba: (req, res) => {
        db.Product.findAll()
            .then(productos => {
                res.send(productos);
            })
            .catch(error => {
                res.send('Error: ' + error);
            });
    },
   

    // Este método se encarga de cerrar la sesión del usuario   
    // También elimina la cookie de "recordarme" si existe
    // Destruye la sesión y redirige a la página principal

    logout: (req, res) => {
        req.session.destroy(() => {
            res.clearCookie('recordarme');
            res.redirect('/');
        });
    },
//
    // Este método se encarga de procesar el registro del usuario
    // Verifica si el email y el nombre de usuario ya existen en la base de datos
    // Si no existen, lo crea en la base de datos
    // Si ya existen, muestra un mensaje de error
    // y vuelve a mostrar la vista de registro
    // Si hay un error en el proceso, muestra un mensaje de error
    // y vuelve a mostrar la vista de registro
    create: function (req, res) {
        let email_usuario = req.body.email;
        let nombre_usuario = req.body.usuario;

        db.User.findOne({ where: { email: email_usuario } })
            .then(function (usuarioEmail) {
                if (usuarioEmail) {
                    return res.render("register", { error: "El email ya existe." });
                }
                if (!req.body.contrasenia || req.body.contrasenia.length < 3) {
                return res.render("register", { error: "La contraseña debe tener al menos 3 caracteres." });
            }
            })
            .then(function (usuarioName) {
                if (usuarioName) {
                    return res.render("register", { error: "El nombre de usuario ya existe." });
                }

                let contrasenia_encriptada = bcrypt.hashSync(req.body.contrasenia, 10);
                return db.User.create({
                    nombre_usuario: req.body.usuario,
                    email: req.body.email,
                    contrasenia: contrasenia_encriptada,
                    fecha_nacimiento: req.body.fecha_nacimiento,
                    dni: req.body.dni,
                    foto_perfil: req.body.foto_perfil,
                    productos_agregados: 0
                });
            })
            .then(function () {
                res.redirect("/");
            })
            .catch(function (error) {
                console.error("Error en registro:", error);
                res.render("register", { error: "Hubo un error al registrar el usuario." });
            });
    },

    // Este método se encarga de procesar el login del usuario
    // Verifica si el usuario existe y si la contraseña es correcta
    // Si todo es correcto, guarda la información del usuario en la sesión
    // y redirige a la página principal 
    // Si el usuario no existe o la contraseña es incorrecta, muestra un mensaje de error
    // y vuelve a mostrar la vista de login
    procesarLogin: function (req, res) {
        let email = req.body.email;
        let contrasenia = req.body.contrasenia;

        db.User.findOne({ where: { email: email } })
            .then(function (usuario) {
                if (!usuario) {
                    return res.render("login", { error: "El email no existe." });
                }
                if (!bcrypt.compareSync(contrasenia, usuario.contrasenia)) {
                    return res.render("login", { error: "La contraseña es incorrecta." });
                }
                //en esta parte de codigo va a guardar al usuario en la session
                req.session.usuario = {
                    id: usuario.id,
                    nombre_usuario: usuario.nombre_usuario,
                    email: usuario.email,
                    foto_perfil: usuario.foto_perfil,
                    productos_agregados: usuario.productos_agregados
                };

                // en este bloque de codigo va a guardar al usuario en la cookie si presiono "recordarme"
                if (req.body.recordame) {
                    res.cookie("recordame", req.session.usuario, { maxAge: 1000 * 60 * 60 * 24 }); //maxage define cuanto tiempo dura la cookie
                }
                return res.redirect("/");
            })
            .catch(function (error) {
                console.error("Error en el proceso de login:", error);
                res.render("login", { error: "Hubo un error al iniciar sesión." });
            });
    },
    
    // Este método se encarga de renderizar la vista de perfil del usuario
    profile: (req, res) => {
        let usuario = req.session.usuario;

        db.Product.findAll({
            where: { id_usuario: usuario.id }
        })
        .then(productos => {
            res.render("profile", {
                usuario: usuario,
                productos: productos,
                cantidad: productos.length
            });
        })
        .catch(error => console.log(error));
    }
}

module.exports = usersController;