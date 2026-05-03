//Process es un objeto global que proporciona información y control sobre el proceso de Node.js en ejecución. Es una instancia de EventEmitter y se puede acceder a él desde cualquier parte del código sin necesidad de importarlo.

//El objeto process tiene varias propiedades y métodos útiles, como process.argv para acceder a los argumentos de la línea de comandos, process.env para acceder a las variables de entorno, process.exit() para salir del proceso, entre otros.

//Ejemplo de uso de process.argv para acceder a los argumentos de la línea de comandos:
// node 7.process.js arg1 arg2 arg3
console.log(process.argv);

//controlar el proceso y su salida
if (process.argv.length < 3) {
    console.error('Por favor, proporciona al menos un argumento.');
    process.exit(1); // Salir con un código de error
}

process.on('exit', (code) => {
    console.log(`El proceso ha terminado con el código ${code}`);
})