const diamond = function (n) {
	if (n%2 == 0) {
		n++;
	}
	let t = n;
	for (i = 0; i < (n+1)/2; i++) {
		draw_diamond(i, t-2*i+1);
	}
	for (k = (n+1)/2 - 2; k >= 0; k--) {
		draw_diamond(k, t-2*k+1);
	}
}

const draw_diamond = function(s, q) {
	let star = "*";
	for (j = 0; j < 2*s; j++) {
		star += "*";
	}
	let space = "";
	for (l = (q-1)/2; l > 0; l--) {
		space += " ";
	}
	console.log(space + star);
}

diamond(15);