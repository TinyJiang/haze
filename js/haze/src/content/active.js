/**
 * 行动
 */
define(function(require, exports, module) {
			var GameBox = require('./GameBox');
			var data = require('./data');
			var d = data.active;
			var ContentWindow = require('../ContentWindow');
			var cw = new ContentWindow($('#activeWindow'));
			var content = $('<div></div>');
			content.append('<h>' + d.title1 + '</h>');
			content.append('<br>');
			var gameDom1 = $('<div></div>');
			var gameDom2 = $('<div></div>');
			var goBlue = function(type) {
				var bgSrc = '';
				if (type == 0) {
					bgSrc = '../static/haze/img/bg2.jpg';
				} else {
					bgSrc = '../static/haze/img/bg3.jpg';
				}
				$('body').css({
							background : 'url("' + bgSrc + '")'
						});
			};
			var gb1 = new GameBox(gameDom1, d.trueReasons, d.falseReasons, 0,
					function() {
						goBlue(0);
					});
			var gb2 = new GameBox(gameDom2, d.trueActives, d.falseActives, 1,
					function() {
						goBlue(1);
					});
			gb1.init();
			gb2.init();

			content.append(gameDom1);
			content.append('<h>' + d.title2 + '</h>');
			content.append('<br>');
			content.append(gameDom2);
			cw.setContent(content);
			module.exports = cw;
		});
