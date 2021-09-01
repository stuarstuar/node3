
const axios = require("axios");
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const chalk = require('chalk')

// Función que escribe archivo, recibe nombre y texto 

const WriteArch = (usuario, texto) => {
    fs.writeFile(usuario, texto, () => {
        console.log("Archivo Creado")
    })
}
const RellenoUsuarios = (user) => {

    var listaUsuarios = []
    listaUsuarios.push(user)
    return listaUsuarios
}


for (var i = 0; i < 4; i++) {
   
    axios
    .get("https://randomuser.me/api/")
    .then((data) => {

        // Recibe Usuario
        const nombre = data.data.results[0].name;
        
        // Crea JSON con nombre de usuario
        var usuario = {
            nombre: `${nombre.first}`,
            apellido: `${nombre.last}`,
            id: `${uuidv4().slice(0,6)}`,
            fecha: `${moment().format('MMM Do YYYY')}`
        };
        
        // Ver si llega el usario
        //console.log(usuario)
        //listaUsuarios.push(usuario)

        console.log(RellenoUsuarios(usuario));
        // Texto para escribir .txt 
        //let texto = `{nombre: ${nombre.first}, apellido: ${nombre.last}, id: ${uuidv4().slice(0,6)}, fecha: ${moment().format('MMM Do YYYY')}}`
        //WriteArch("usuario.txt", texto)
        // Imprimir por consola el mismo txt 
        //console.log(chalk.blue.bgWhite.bold((`${texto}`)))
        
    })

    .catch((e) => {
        console.log(e);
    });
 }



// falta hacer que entregue varios nombres, guardarlos en un objeto e imprimir el arreglo




/*


const GetUsers = (i) => {

    for (var i = 0; i < 4; i++) {
        axios
        .get("https://randomuser.me/api/")
        .then((data) => {
    
            // Recibe Usuario
            const nombre = data.data.results[0].name;
            // Crea JSON con nombre de usuario
            var usuario = {
                nombre: `${nombre.first}`,
                apellido: `${nombre.last}`,
                id: `${uuidv4().slice(0,6)}`,
                fecha: `${moment().format('MMM Do YYYY')}`
            };
            
            console.log(usuario)
            listaUsuarios.push(usuario)

            return "aa"
            
        })
        .catch((e) => {
            console.log(e);
        });
    }
}
listaUsuarios = []
console.log(GetUsers(5)) 
*/