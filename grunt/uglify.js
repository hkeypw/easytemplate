module.exports = {
	options: {
     stripBanners: true,
     banner: '/* front min.js  */\n' //комментарий который будет в минифицированном файле.
    },

    build: {
      src: ['dev/js/front.js','dev/js/custom.js'],  // какой файл минифицировать
      dest: 'assets/js/front.min.js' // куда класть файл, который получиться после процесса минификации
    }
};