/**
 * 首页内容
 */
define(function(require, exports, module) {
			var data = require('./data');
			var d = data.index;
			var ContentWindow = require('../ContentWindow');
			var cw = new ContentWindow($('#indexWindow'));

			var content = $('<div></div>');
			content.append('<h>' + d.title + '</h>');
			content.append('<br>');
			var sp = '<br>&nbsp&nbsp&nbsp&nbsp'
			var text = d.text.join(sp);
			text = sp + text;
			content.append('<span>' + text + '</span>');
			cw.setContent(content);
			module.exports = cw;
		});