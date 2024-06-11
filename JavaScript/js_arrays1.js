
const arrayPrueba = [
    {
        name: "Eraser",
        price: 1000,
        stock: 300,
    },
    {
        name: "Pencil",
        price: 2000,
        stock: 220,
    },
    {
        name: "table",
        price: 1500,
        stock: 25,
    },
]

const arrayPrueba1 = [
    {
        name: "Eraser",
        price: 3,
        stock: 300,
    },
    {
        name: "Pencil",
        price: 10,
        stock: 220,
    },
    {
        name: "table",
        price: 150,
        stock: 25,
    },
]


//Definición

const addNewAttr = (arrayEntrada) => {
    return arrayEntrada.map((elemento) => {
        const elementoNuevo = {...elemento, taxes: Math.trunc(elemento.price * .19) };
        return elementoNuevo;
    
    });
};

//Ejecución

console.log(addNewAttr(arrayPrueba))