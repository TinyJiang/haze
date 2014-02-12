/**
 * 行动
 */
define(function(require, exports, module) {
			var data = require('./data');
			var d = data.active;
			var ContentWindow = require('../ContentWindow');
			var cw = new ContentWindow($('#activeWindow'));
			var content = $('<div></div>');

			content.append('<h>' + d.title + '</h>');
			content.append('<br>');
			cw.setContent(content);
			module.exports = cw;
		});
