const fs = require('node:fs/promises');
const { text } = require('node:stream/consumers');

console.log('Leyendo el archivo numero uno...');
fs.readFile('archivo.txt', 'utf-8')
.then(text => {
    console.log('Primer texto', text);
}).catch(err => {
    console.error('Error al leer el archivo:', err);
});

console.log("Hacer cosas mientras lee el archivo...");

console.log('Leyendo el archivo numero dos...');
fs.readFile('archivo2.txt', 'utf-8').
then(text2 => {
    console.log('Segundo texto', text2);
}).catch(err => {
    console.error('Error al leer el archivo:', err);
});