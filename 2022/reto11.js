function getCompleted(part, total) {
	let num = part.split(':');
	let denom = total.split(':');
	let secNum = num[0] * 60 ** 2 + num[1] * 60 + num[2] * 1;
	let secDenom = denom[0] * 60 ** 2 + denom[1] * 60 + denom[2] * 1;
	const getFraction = (decimal) => {
		for (var i = 1; (decimal * i) % 1 !== 0; i++); 
    return decimal * i + '/' + i;
	};
	let fraction = getFraction(secNum / secDenom);
	return fraction;
}

// getCompleted('01:00:00', '03:00:00'); // '1/3'
// getCompleted('02:00:00', '04:00:00'); // '1/2'
// getCompleted('01:00:00', '01:00:00'); // '1/1'
getCompleted('00:10:00', '01:00:00'); // '1/6'
// getCompleted('01:10:10', '03:30:30'); // '1/3'
getCompleted('03:30:30', '05:50:50'); // '3/5
