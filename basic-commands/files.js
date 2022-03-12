const fs = require('fs');

fs.writeFile('./newfile.txt', 'VISMAYA 💕❤️❤️💕Ebin ,"\n"', (err) => {
    console.log('File Written completed');
});
fs.appendFile('./newfile.txt', 'EBIN 💕💕💕💕💕💕💕 VISMAYA ', (err) => {
    console.log('File Written completed');
});