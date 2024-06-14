const team = [
  {
    name: "cielo",
    age: 25,
  },
  {
    name: "camilo",
    age: 27,
  },
  {
    name: "pedro",
    age: 27,
  },
  {
    name: "sandra",
    age: 52,
  },
]

const rta = team.every(jugador => jugador.age <= 52 )
console.log(rta)