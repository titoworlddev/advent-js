function printTable(gifts) {
  const nameTitle = 'Gift';
  const quantityTitle = 'Quantity';
  const nameWidth = Math.max(
    nameTitle.length,
    ...gifts.map((gift) => gift.name.length)
  );
  const quantityWidth = Math.max(
    quantityTitle.length,
    ...gifts.map((gift) => gift.quantity.toString().length)
  );

  // Pintamos la parte de arriba de la tabla
  let table = '+'.repeat(nameWidth + quantityWidth + 7) + '\n';
  table +=
    '| ' +
    nameTitle +
    ' '.repeat(nameWidth - nameTitle.length) +
    ' | ' +
    quantityTitle +
    ' '.repeat(quantityWidth - quantityTitle.length) +
    ' |\n';
  table +=
    '| ' + '-'.repeat(nameWidth) + ' | ' + '-'.repeat(quantityWidth) + ' |\n';

  // Pintamos el contenido de la tabla
  gifts.forEach(({ name, quantity }) => {
    table += '| ' + name + ' '.repeat(nameWidth - name.length) + ' | ';
    table +=
      quantity +
      ' '.repeat(quantityWidth - quantity.toString().length) +
      ' |\n';
  });

  // Pintamos la parte de abajo de la tabla
  table += '*'.repeat(nameWidth + quantityWidth + 7);

  return table;
}

// Hay muchas cartas de niños pidiendo regalos y es muy difícil que podamos hacer inventario de todos ellos. Por eso, hemos decidido crear un programa que nos dibuje una tabla con los regalos que nos piden y sus cantidades.
// Para ello nos dan un array de objetos con los nombres de los regalos y sus cantidades. Escribe una función que reciba este array y devuelva una cadena con la tabla dibujada.

// printTable([
//   { name: 'Game', quantity: 2 },
//   { name: 'Bike', quantity: 1 },
//   { name: 'Book', quantity: 3 },
// ]);

// +++++++++++++++++++
// | Gift | Quantity |
// | ---- | -------- |
// | Game | 2        |
// | Bike | 1        |
// | Book | 3        |
// *******************
// Otro ejemplo donde se puede ver que la tabla siempre usa sólo el espacio justo dependiendo de la longitud de los nombres de los regalos y de las cantidades.

printTable([
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 },
]);

// ++++++++++++++++++++++++++++++++++++++
// | Gift               | Quantity      |
// | ------------------ | ------------- |
// | PlayStation 5      | 9234782374892 |
// | Book Learn Web Dev | 23531         |
// **************************************
// Como ves, el tamaño de las celdas depende de la longitud de los nombres de los regalos y de las cantidades, aunque como mínimo tendrán que ser del espacio de los títulos Gift y Quantity respectivamente.

// La tabla usa los símbolos: + para el borde superior, * para el borde inferior, - para las líneas horizontales y | para las líneas verticales.

// Ten en cuenta:
// Usa sólo el espacio que necesitas para dibujar la tabla.
// Adapta la tabla a la longitud de los nombres de los regalos y de las cantidades o los títulos de las columnas.
// No hace falta que ordenes los resultados.
// La tabla no termina con salto de línea.
