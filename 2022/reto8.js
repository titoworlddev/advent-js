function checkPart(part) {
  let norm = [...part]
  let rev = [...norm]
  rev.reverse()
  norm.forEach((elem, i) => {
    if(elem !== rev[i]) {
      norm.splice(i, 1)
      rev.reverse().splice(i, 1) 
      rev.reverse()
    }
  })
  return rev.join('') === norm.join('')
}


checkPart("uwu") // true
// "uwu" es un palíndromo sin eliminar ningún carácter

checkPart("miidim") // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

checkPart("midu") // false
// "midu" no puede ser un palíndromo después de eliminar un carácter

checkPart("zzzoonzzz") // true