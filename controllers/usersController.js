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
   

    // Este método se encarga de cerrar la sesión del usuario   
    // También elimina la cookie de "recordarme" si existe
    // Destruye la sesión y redirige a la página principal

    logout: (req, res) => {
        req.session.destroy(() => {
            res.clearCookie('recordarme');
            res.redirect('/');
        });
    },

    // Este método se encarga de procesar el registro del usuario
    // Verifica si el email y el nombre de usuario ya existen en la base de datos
    // Si no existen, lo crea en la base de datos
    // Si ya existen, muestra un mensaje de error
    // y vuelve a mostrar la vista de registro
    // Si hay un error en el proceso, muestra un mensaje de error
    // y vuelve a mostrar la vista de registro
    create: function (req, res) {
        const email_usuario = req.body.email;
        const nombre_usuario = req.body.usuario;
        const dni_usuario = req.body.dni;
        const foto_perfil_usuario = req.body.foto_perfil;
        const fecha_nacimiento_usuario = req.body.fecha_nacimiento;
        const contrasenia_usuario = req.body.contrasenia;

        // Validaciones simples
        if (!email_usuario) {
            return res.render("register", { error: "El email es obligatorio." });
        }
        if (!contrasenia_usuario < 3) {
            return res.render("register", { error: "La contraseña debe tener al menos 3 caracteres." });
        }

        db.User.findOne({ where: { email: email_usuario } })
            .then(function (usuarioEmail) {
                if (usuarioEmail) {
                    return res.render("register", { error: "El email ya existe." });
                }
            })
            .then(function (usuarioName) {
                if (usuarioName) {
                    return res.render("register", { error: "El nombre de usuario ya existe." });
                }

                let contrasenia_encriptada = bcrypt.hashSync(contrasenia_usuario, 10);
                return db.User.create({
                    nombre_usuario: nombre_usuario,
                    email: email_usuario,
                    contrasenia: contrasenia_encriptada,
                    fecha_nacimiento: fecha_nacimiento_usuario,
                    dni: dni_usuario,
                    foto_perfil: foto_perfil_usuario
                });
            })
            .then(function (user) {
                req.session.usuario = {
                    id_usuario: user.id,
                    nombre_usuario: user.nombre_usuario,
                    email: user.email,
                    foto_perfil: user.foto_perfil
                };
                res.redirect("/user/profile");
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
                    id_usuario: usuario.id,
                    nombre_usuario: usuario.nombre_usuario,
                    email: usuario.email,
                    foto_perfil: usuario.foto_perfil
                };

                // en este bloque de codigo va a guardar al usuario en la cookie si presiono "recordarme"
                if (req.body.recordame) {
                    res.cookie("recordame", req.session.usuario, { maxAge: 1000 * 60 * 60 * 24 }); //maxage define cuanto tiempo dura la cookie
                }
                return res.redirect("/users/profile");
            })
            .catch(function (error) {
                console.error("Error en el proceso de login:", error);
                res.render("login", { error: "Hubo un error al iniciar sesión." });
            });
    },
    
    // Este método se encarga de renderizar la vista de perfil del usuario
    profile: (req, res) => {
        res.render("profile", {
            usuario: moduloDatos.usuario,
            productos: moduloDatos.productos
        });
    }
}

module.exports = usersController;