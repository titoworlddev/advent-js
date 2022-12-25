function canExit(maze) {
  const replace = str =>
    str
      .replace(/[S][\sE]/g, 'SS')
      .replace(/[\sE][S]/g, 'SS')
      .split('');

  maze[0].forEach(() => (maze[0] = replace(maze[0].join(''))));

  const fill = arr => {
    return arr.reduce((prev, curr, i) => {
      curr = curr.map((box, idx) =>
        box === ' ' && prev[idx] === 'S' ? 'S' : box
      );
      curr.forEach(() => (curr = replace(curr.join(''))));
      return (arr[i] = curr);
    });
  };

  fill(maze);
  fill(maze.reverse());
  fill(maze.reverse());

  return !maze.flat().join('').includes('E');
}

canExit([
  [' ', ' ', ' ', 'W', 'S'],
  [' ', 'W', ' ', 'W', ' '],
  [' ', 'W', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', ' '],
  ['W', ' ', ' ', ' ', ' '],
  ['W', ' ', 'W', 'W', 'W'],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', ' '],
  [' ', ' ', ' ', 'W', ' '],
  [' ', 'W', 'W', 'W', ' '],
  [' ', ' ', ' ', ' ', ' '],
  ['W', 'W', 'W', ' ', 'W'],
  [' ', 'W', ' ', ' ', 'W'],
  [' ', 'W', ' ', 'W', 'W'],
  [' ', 'W', ' ', ' ', 'W'],
  [' ', 'W', 'W', ' ', 'W'],
  [' ', ' ', ' ', ' ', 'W'],
  ['W', ' ', 'W', 'W', 'W'],
  ['W', ' ', 'W', 'W', 'W'],
  ['W', ' ', ' ', ' ', 'E'],
]);

// canExit([['E', ' ', 'W', ' ', 'S']]);

// ¡Ha llegado el día! Hoy vamos a repartir los regalos… pero los almacenes son un labertinto y los elfos están perdidos.
// Indielfo Jones quiere escribir un programa que al recibir una matriz, sepa si puede salir o no del laberinto rápidamente desde su entrada a la salida.
// Los laberintos tienen las siguientes posiciones:
// W: Es una pared, no se puede pasar por ahí.
// S: Punto de entrada al almacén.
// E: Punto de salida del almacén.
// : Los espacios en blanco es por donde se puede pasar.
// Los movimientos válidos son de una posición hacia arriba, abajo, izquierda o derecha. No se puede mover en diagonal.



// Se puede salir porque empezamos en [0, 4]
// y hay un camino hasta la salida que es [4, 4]

// canExit([
//   [' ', ' ', 'W', 'W', 'S'],
//   [' ', ' ', ' ', 'W', ' '],
//   [' ', ' ', ' ', 'W', ' '],
//   ['W', 'W', ' ', 'W', 'W'],
//   [' ', ' ', ' ', ' ', 'E']
// ]) // -> false

// No hay manera de llegar de [0, 4] a [4, 4]

// Recuerda que:
// Sólo tienes que devolver si se puede salir del laberinto con un booleano.
// Las paredes W no se pueden saltar.
// No se pueden salir de los límites de la matriz, siempre hay que seguir un camino interno.

// ===================================================

function replace(str) {
  return str
    .replace(/[S][\sE]/g, 'SS')
    .replace(/[\sE][S]/g, 'SS')
    .split('');
}

// replace([' ', ' ', 'W', 'S', 'S'].join(''))
// replace(['S', 'S', 'S', 'S', 'S'].join(''))
// replace(['S', 'S', 'S', 'W', 'S'].join(''))
// replace(['W', 'W', 'S', 'W', 'W'].join(''))
// replace(['S', 'S', 'S', 'S', 'S'].join(''))

// replace([' ', ' ', 'W', 'W', 'S'].join(''))
// replace([' ', ' ', ' ', 'W', 'S'].join(''))
// replace([' ', ' ', ' ', 'W', 'S'].join(''))
// replace(['W', 'W', ' ', 'W', 'W'].join(''))
// replace([' ', ' ', ' ', ' ', 'E'].join(''))

// const matriz = [
//   [' ', ' ', 'W', 'S', 'S'],
//   ['S', 'S', 'S', 'S', 'S'],
//   ['S', 'S', 'S', 'W', 'S'],
//   ['W', 'W', 'S', 'W', 'W'],
//   ['S', 'S', 'S', 'S', 'S']];
// const matriz2 = [
// [' ', ' ', 'W', 'W', 'S'],
// [' ', ' ', ' ', 'W', 'S'],
// [' ', ' ', ' ', 'W', 'S'],
// ['W', 'W', ' ', 'W', 'W'],
// [' ', ' ', ' ', ' ', 'E']
// ]

// console.log(matriz.map((arr) => arr.join('')).join('').includes('E'))
// console.log(matriz2.map((arr) => arr.join('')).join('').includes('E'))

/*
Voy pintando las que estan al lado de la S con otra S,
paso a la siguiente linea, si en la casilla actual,
en la linea anterior habia una S, pinto la misma casilla
pero en la linea actual, y vuelvo a pasar por esa linea 
desde el principio, para que se pinten todas las que estan
al lado de las S y asi seguir el camino.
Si llega un momento, que la linea actual esta en una casilla
vacia y la que estaba en la misma casilla pero la linea anterior 
no tiene una S y la casilla actual no se puede pintar, y ninguna
en esa linea, entonces retornamos ya falso, porque quiere decir 
que la S no puede seguir ningun camino ya que esta tapada.

Primero mirar si hay una S encima y despues un foreach y que recorra la linea tantas veces para rellenarla con S Si procede
*/