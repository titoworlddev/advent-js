function decorateTree(base) {
}

// Arriba coloca  :     P     R     B     P
// Si abajo tiene :    P P   B P   R P   B R
//    R
//   P B
//  R B B
// B P R P

decorateTree('B P R P')
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

// decorateTree('B B') // ['B', 'B B']