function createCube(size) {
	const tL = '/\\'
	const tR = '_\\'
	const bL = '\\/'
	const bR = '_/'
	let cube = []
	for (let i = 0; i < size; i++) {
			cube.push(' '.repeat(size - i-1) + tL.repeat(i + 1) + tR.repeat(size))
	}
	for (let i = 0; i < size; i++) {
		  cube.push(' '.repeat(i) + bL.repeat(size - i) + bR.repeat(size))
	}
	return cube.join('\n')
}

const cubeOfOne = createCube(9)

console.log(cubeOfOne)