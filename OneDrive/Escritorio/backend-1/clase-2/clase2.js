const objetos = [
    {
        manzana: 2,
        banana: 3,
        naranja: 4,
        pera: 5
    },
    {
        manzana: 3,
        banana: 4,
        naranja: 5,
        pera: 6
    }
]

const tiposProductos = []
let TotalProductos = 0
objetos.forEach(objeto => {
    Object.keys(objeto).forEach(clave => {
        if (!tiposProductos.includes(clave)) {
            tiposProductos.push(clave);
        }
    });
})
// Mostrar los tipos de productos únicos
console.log(tiposProductos);

objetos.forEach(obj => {
    const cantidades = Object.values(obj);
    cantidades.forEach(cantidad => {
        TotalProductos += cantidad;
    });
})
console.log(TotalProductos);

