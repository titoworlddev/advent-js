function getGiftsToRefill(a1, a2, a3) {
  // Se hace array con un set de entre todos los array para no tener ningun valor repetido
  let gifts = [...new Set([...a1, ...a2, ...a3])]
	return gifts.filter((e) => {
    // Aqui se compara y se dice que el numero total de true sea menor a 2
    return a1.includes(e) + a2.includes(e) + a3.includes(e) < 2
	})
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']
// const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']