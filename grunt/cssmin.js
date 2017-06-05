module.exports = {
	with_banner: {
		options: {
		    banner: '/* start minified CSS */' 
		},
		files: {
			'assets/css/style.min.css' : ['dev/css/style.css']   
		}
	}
};