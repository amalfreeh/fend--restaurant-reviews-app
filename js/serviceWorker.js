if (navigator.serviceWorker) {
	navigator.serviceWorker.register('./sw.js')
	.then(function () {
		/* body... */
		console.log('sw Registered');
	})
	.catch(function () {
		/* body... */
		console.log('registeration Failed');
	});
}
