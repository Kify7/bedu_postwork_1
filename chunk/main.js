
// Chunk:
// Escribir una función chunk que recibe un arreglo y un número entero size. 
// La función debe dividir el arreglo en múltiples arreglos del tamaño determinado por size.

function chunk(array, size) {
    let arrayRebanadas = [];
    for (let i = 0; i < array.length; i += size) {
        let rebanada = array.slice(i, i + size);
        arrayRebanadas.push(rebanada);
  };
  return arrayRebanadas;
}
  const data = [1, 2, 3, 4, 5, 6, 7, 8]
  
  console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
  console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
  console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]




