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

			content.append('<span>' + d.desc + '</span>');

			content.append('<h>' + d.title2 + '</h><br>');

			$.each(d.links, function(i, link) {
						content.append('<br><a target="link+' + i + '" href="'
								+ link.url + '">' + link.text + '</a><br>');
					});

			cw.setContent(content);

			module.exports = cw;
		});
