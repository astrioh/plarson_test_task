function documentReady(fn) {
    document.addEventListener('readystatechange', () => {
		if (document.readyState === 'interactive') {
			fn();
			document.addEventListener('DOMContentLoaded', () => {
				fn()
			});
		}
	});
}

function test() {
    console.log('Function call');
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded');
});

documentReady(test);