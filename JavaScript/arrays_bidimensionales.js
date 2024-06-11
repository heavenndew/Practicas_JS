let array1D = [1,2,3]
let array2D = [[1,2,3], [4,5,6],[7,8,9]]

let matrix = [
    [1,2,3], 
    [4,5,6],
    [7,8,9] 
]

matrix[1][2] = 10 //filas 0,1 y columnas 0,1,2
console.log(matrix)

let value = matrix[0][1]
console.log(value) //nos devuelve el valor de la ubicacion

//operations

//me devuelve lo que hay

for (let i = 0; i < matrix.length; i++){
    for (let j = 0; i < matrix[i].length; j++) {
        console.log(matrix[i][j])
    }
}

function findElement (matrix, element){
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === element) {
                return true
            }
        }
    } 

    return false
}

console.log (findElement(matrix, 5))