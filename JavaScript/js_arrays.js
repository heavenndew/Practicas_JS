const arrayDePrueba = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20,
  },
];
const arrayDePrueba2 = [
  {
    name: "Product 3",
    price: 1000,
    stock: 10,
  },
  {
    name: "Product 4",
    price: 2000,
    stock: 20,
  },
];

// Definición

const addNewAttr = (arrayDeEntrada) => {

  return arrayDeEntrada.map((elementoActual) => {
    
    const nuevoElemento = { ...elementoActual,  taxes: Math.trunc( elementoActual.price * .19 )   };

    return nuevoElemento;
  });

};

// ejecución
console.log(addNewAttr(arrayDePrueba));
