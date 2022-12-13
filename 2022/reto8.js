function checkPart(part) {
  let norm = [...part]
  norm.map((elem, i, arr) => {
    if(i < arr.length - 1 && elem === arr[i + 1]) arr.splice(i, 1)
  })
  let rev = [...norm]
  rev.reverse()
  return rev.join('') === norm.join('')
}


checkPart("uwu") // true
// "uwu" es un palíndromo sin eliminar ningún carácter

checkPart("miidim") // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

checkPart("midu") // false
// "midu" no puede ser un palíndromo después de eliminar un carácter