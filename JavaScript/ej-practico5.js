// const team = [
//   {
//     name: "cielo",
//     age: 25,
//   },
//   {
//     name: "camilo",
//     age: 27,
//   },
//   {
//     name: "pedro",
//     age: 27,
//   },
//   {
//     name: "sandra",
//     age: 52,
//   },
// ]

// const rta = team.every(jugador => jugador.age <= 52 )
// console.log(rta)

// const parent = document.getElementById("parent");
// console.log("parent", parent.outerHTML);

// const Children = parent.children;
// console.log(Children);

// const name = document.getElementById("name");
// debugger
// name.value = "lola";
// console.log("name", name.value);

// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   name.value = "camilo";
// });

//en los 3 primeros const estoy seleccionando 3 etiquetas 

const title = document.getElementById("title");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const btn = document.getElementById("btn");

//cuando sele di click al boton el contenido del titulo va a cambiar segun el valor que este dentro del input
btn.addEventListener("click", () => {
  title.textContent = "Contenido: " + number1.value + " + " + number2.value + " = " + (parseInt(number1.value) + parseInt(number2.value));
});