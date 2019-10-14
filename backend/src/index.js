const app = require('./app');

async function main() {
    //app.listen es un metodo asincrono
    //eso quiere decir que tomara algo de tiempo
    //ejecutarse, y una vez se ejecute se ejecutara el
    //console.log
    await app.listen(4000);
    console.log('server on port 4000');
}
main();

