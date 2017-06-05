module.exports = {
	less:{
		files:['less/**/*.less'],
		tasks:['less2css']
	},
	css: {
		files: ['dev/css/*.css'],
		tasks: ['minicss'] 
	},
	scripts: {
     	files: ['dev/js/*.js'],  //следить за всеми js файлами в папке
     	tasks: ['minijs']  //при их изменении запускать следующие задачи
     }
};