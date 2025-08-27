import fs from 'fs'

//ejemplo de calculadora de dias
/*const hoy = moment();

const nacimiento = moment('1994-12-18', 'yyyy-mm-dd')

if (!nacimiento.isValid()) {
    console.log("no valido")
    process.exit()
}
const dias = hoy.diff(nacimiento, 'days')

console.log(`han pasado ${dias} desde que naciste`) */


//ejemplo de async con promesa  y settimeout
/* const tiempo = async (callback) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            callback()
            resolve()
        }, 3000)
    })
}
const numero = () => {
    console.log("numero 2")
}
async function main() {
    console.log(`1`)
    await tiempo(numero)
    console.log(`3`)
    console.log(`4`)
    console.log(`5`)
}
main() */

//ejemplo con setInterval
/*
let contador = () => {
    let counter = 1;
    console.log("realizando conteo")
    let timer = setInterval(() => {
        console.log(counter++)
        if (counter > 5) {
            clearInterval(timer)
        }
    }, 2000);

}
console.log("inicio")
contador()
console.log("fin")
 */

//ejemplo de fs sincrono

/* fs.writeFileSync('texto.txt', 'hola mundo')

if (fs.existsSync('texto.txt')) {
    console.log("archivo existente")
    const data = fs.readFileSync('texto.txt', 'utf-8')
    console.log(data)

    fs.appendFileSync('texto.txt', " \naguante river")
    const newData = fs.readFileSync('texto.txt', 'utf-8')
    console.log(newData)
    const eliminar = fs.unlinkSync('texto.txt');
    console.log("archivo eliminado")
}
 */

//ejemplo fs asincrono con promesas

/* const operacionesAsincronas = async () => {
    const filename = 'file.txt'
    await fs.promises.writeFile(filename, 'hola mundo')
    console.log("archivo creado")

    const leerArchivo = await fs.promises.readFile(filename, "utf-8")
    console.log("el archivo dice ", leerArchivo)

    const editarArchivo = await fs.promises.appendFile(filename, "\n soy alejandro miranda")
    console.log("se agrego contenido")

    const archivoEditado = await fs.promises.readFile(filename, "utf-8")
    console.log(archivoEditado)

    const eliminarArchivo = await fs.promises.unlink(filename)
    console.log("se elimino el archivo")
}
operacionesAsincronas()
 */

//ejemplo fs asincrono con promesas  ( ejemplo del profesor)

/* const filename = 'file.txt'
fs.writeFile(filename, 'hola mundo')
    .then(() => {
        console.log("archivo creado")
        return fs.readFile(filename, "utf-8")
    })
    .then((data) => {
        console.log(data)
        return fs.appendFile(filename, 'aguante messi')
    }) */


// ejercicio completo de la clase
/*
async function archivos() {
    try {
        const contenidoStr = await fs.promises.readFile('package.json', 'utf-8')
        const contenidoObj = JSON.parse(contenidoStr)
        const stats = await fs.promises.stat('package.json')
        const info = {
            contenidoStr,
            contenidoObj,
            size: stats.size,
        }
        console.log(info)
        await fs.promises.writeFile('info.json', JSON.stringify(info, null, 2))
    }
    catch (error) {
        console.error('error al procesar el archivo ', error)
    }
}
archivos() */

//ejemplo de manager de ususarios 
