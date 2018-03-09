const Hook = {
	start() {
		// return Promise.all([

		// ])

		return new Promise(function(resolve, reject) {

			Promise.all([

			]).then(() => {
		  	setTimeout(resolve, 5000, 'foo');
			})
		});
		
	}
}

export default Hook;
