
const debug = true
let App = {}
const Hook = {
	start() {

		if (debug) {
			
			window.app = App 	// eslint-disable-line
		}
		return new Promise(function(resolve, reject) {

			Promise.all([

			]).then(() => {
		  	setTimeout(resolve, 5000, 'foo');
			})
		});
		
	}
}

export default Hook;
