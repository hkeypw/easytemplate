module.exports = {
	development: {
        options: {
          compress: false,
          strictMath: true
        },
        files: {
          "dev/css/style.css": "less/style.less" // destination file and source file
        }
     }
};