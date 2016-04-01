var clock = function() {
	var h = new Date().getHours(),
		m = new Date().getMinutes();
	if (localStorage.format === '12') {
		if (h > 12) {
			h = h - 12;
		}
	}
	if (localStorage.zero === 'true') {
		if (h < 10) { h = '0' + h; }
	}
    if (m < 10) { m = '0' + m; }
	document.getElementById('clock').innerHTML = h + ':' + m;
};

addEventListener('load', function() {
	clock();
	setInterval(function() {
        clock();
        document.body.className = localStorage.theme;
	}, 200);
});