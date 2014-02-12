/**
 * 行动
 */
define(function(require, exports, module) {
			var data = require('./data');
			var d = data.about;
			var ContentWindow = require('../ContentWindow');
			var cw = new ContentWindow($('#aboutWindow'));
			var content = $('<div></div>');

			content.append('<h>' + d.title + '</h>');
			content.append('<br>');
			cw.setContent(content);

			module.exports = cw;
		});
