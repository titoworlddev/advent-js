function decorateTree(base) {
  const cases = {
    PP: 'P',
    BP: 'R',
    PB: 'R',
    RP: 'B',
    PR: 'B',
    BR: 'P',
    RB: 'P',
    BB: 'B',
    RR: 'R',
    PP: 'P',
  };
  let tree = [base];
  let valid = false;

  // Creamos el arbol
  while (valid === false) {
    const preLine = tree[0].split(' ');

    // Agregamos cada letra segun el caso correspondiente
    let newLine = preLine
      .map((el, i) => cases[preLine[i - 1] + el])
      .join(' ').trim();

    // Agregamos la linea al arbol con los espacios
    tree.unshift(newLine);

    // Validamos si se ha completado el arbol
    valid = tree[0].replaceAll(' ', '').length 
          + tree[1].replaceAll(' ', '').length 
          <= 3;
  }

  return tree;
}

// Arriba coloca  :     P     R     B     P
// Si abajo tiene :    P P   B P   R P   B R
//    R
//    ⬇️
//   P B
//   ⬇️ ⬇️
//  R B B
//  ⬇️ ⬇️ ⬇️
// B P R P

decorateTree('B P R P');
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

// decorateTree('B B')
// [
// 'B',
// 'B B'
// ]