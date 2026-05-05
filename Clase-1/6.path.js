const path = require('node:path');
//unir rutas con path.join
'./content/subfolder/text.txt' // NO USAR // ES MEJOR UNIRLAS QUE CREARLAS ASI
console.log(path.sep) // BARRA SEPARADORA DE CARPETAS SEGUN SO

//UNIR RUTAS CON PATH JOIN
const filePath = path.join('content', 'subfolder', 'text.txt');
console.log(filePath);

const base = path.basename('tmp/test.txt');
console.log(base);

const filename = path.basename('tmp/test.txt', '.txt');
console.log(filename);

const extension = path.extname('image.jpg')
console.log(extension);