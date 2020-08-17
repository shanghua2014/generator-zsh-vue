const Generator = require('yeoman-generator');
module.exports = class extends Generator {
	prompting() {
		return this.prompt({
			type: 'input',
			name: 'name',
			message: 'Your prejoct name',
			default: this.appname
		}).then((answer) => {
			this.answer = answer;
		});
	}
	writing() {
		const templates = ['babel.config.js', 'package.json', 'README.md', 'public/favicon.ico', 'public/index.html', 'src/App.vue', 'src/main.js', 'src/assets/logo.png', 'src/components/HelloWorld.vue'];
		templates.forEach((item) => {
			this.fs.copyTpl(this.templatePath(item), this.destinationPath(item), this.answer);
		});
	}
};
