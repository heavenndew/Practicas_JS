// estoy declarando variables


let nombre = 'dew'
let edad = 25
let estaturaEnCm = 165
let email = 'cielocalderon02@gmail.com'
let mayorDe18Años = edad>18
let profesion = 'programmer'
let direccion = 'las Palmas Paramon Puli Cund Colombia'
let telefono = 3118485186
let institucionEducativa = {
    nombre: 'platzi',
    telefono: '31020202',
    profesor: 'Diego',
}
let cursosTomados = [
    {
        nombreCurso: 'Curso de maquetación',
        fechaDeFinalizacion: '23/02/2024'
    },
    {
        nombreCurso: 'Curso de CSS',
        fechaDeFinalizacion: '23/12/2023'
    }
]
let aspiraciones = [
    {
        nombreAspiracion: 'Gestion de tiempo',
        descripcion: 'Manejar mi calendario a gusto, priorizando mis actividades y siendo eficiente en el trabajo'
    },
    {
        nombreAspiracion: 'Disciplina',
        descripcion: 'Crear habitos sanos, enriquecedores, y con objetivo'
    },
    {
        nombreAspiracion: 'Solvencia económica',
        descripcion: 'Tener mas que suficiente y sobre todo saber administrarlo'
    }
]

const fraseAspiracíones = `Hola. mucho gusto soy ${nombre}, tengo ${edad} años, y mis aspiraciones son: la ${aspiraciones[0].nombreAspiracion} para ${aspiraciones[0].descripcion},
de la mano con la ${aspiraciones[1].nombreAspiracion} ayudandome a ${aspiraciones[1].descripcion}, logrando así una ${aspiraciones[2].nombreAspiracion} para ${aspiraciones[2].descripcion}`
console.log(fraseAspiracíones)
//planeo gestionaar mejor mi tiempo, d elamano con la discciplina que es necesaria para lograr cualquier meta como lo es la solvencia económica

// pintando en consola las variables


// console.log(institucionEducativa.profesor,'mostrando institucion educativa')
// // estamos usando un template literal, para concatenar información y mostrarla en la consola
// console.log(`Hola buenos dias, mucho gusto, me llamo ${nombre} , 
// tengo ${edad} años, 
// soy ${profesion} en formación y deseo dormir,
// actualmente estudio en ${institucionEducativa.nombre}
// el ultimo curso que tome fué ${cursosTomados[1].nombreCurso} finalizado el ${cursosTomados[1].fechaDeFinalizacion}`)



function sumaElementos (a, b) {
    return a+b
}
sumaElementos (3,5)