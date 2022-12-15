function checkJump(heights) {
	let bigger = Math.max(...heights);
	let first = heights.splice(0, heights.indexOf(bigger));
	let second = heights.splice(heights.indexOf(bigger), heights.length);
	let firstOk = first.slice(1).every((e, i) => e >= first[i]);
	let secondOk = second.slice(1).every((e, i) => e <= second[i]);
	return firstOk && secondOk && second.length > 1 && !!first.length;
}

const heights = [1, 3, 8, 5, 2];
checkJump(heights); // true
// checkJump([2, 2, 2, 2]) // false
// checkJump([1, 2, 3]) // false

/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

checkJump([1, 7, 3, 5]); // false
checkJump([1, 2, 3, 1, 3, 1]); // false
checkJump([1, 3, 2, 5, 4, 3, 2, 1]); // false

/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3
*/