
const axios = require("axios");
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const chalk = require('chalk')

// Función que escribe archivo, recibe nombre y texto 

let WriteArch = (usuario, texto) => {
    fs.writeFile(usuario, texto, () => {
        console.log("Archivo Creado")
    })
}

axios
    .get("https://randomuser.me/api/")
    .then((data) => {

        // Recibe Usuario
        const nombre = data.data.results[0].name;

        // Crea JSON con nombre de usuario
        let texto = ` {nombre: ${nombre.first}, apellido: ${nombre.last}, id: ${uuidv4().slice(0,6)}, fecha: ${moment().format('MMM Do YYYY')}}`
        console.log(chalk.blue.bgWhite.bold((`${texto}`)))

        WriteArch("usuario.txt", texto)
    })

    .catch((e) => {
        console.log(e);
    });

    

    // falta hacer que entregue varios nombres, guardarlos en un objeto e imprimir el arreglo
    