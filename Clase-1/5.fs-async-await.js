const {readFile} = require('node:fs/promises');

(
 async () => {
    console.log('Leyendo el archivo numero uno...');const text = await readFile('archivo.txt', 'utf-8')
    console.log('Primer texto', text);
    console.log("Hacer cosas mientras lee el archivo...");
    
    console.log('Leyendo el archivo numero dos...');
    const text2 = await readFile('archivo2.txt', 'utf-8');
    console.log('Segundo texto', text2);
}
)