/**
 * 内容窗口
 */
define(function(require, exports, module) {
			// import lib
			require('jquery');
			require('jquery.easing');
			var ContentWindow = function(contentWin) {
				var setContent = function(content) {
					contentWin.empty();
					contentWin.append(content);
				};
				var show = function(callback) {
					contentWin.stop().fadeOut({
								complete : function() {
									contentWin.fadeIn();
									if (typeof(callback) == 'function') {
										callback();
									}
								}
							});
				};
				var hide = function(callback) {
					contentWin.fadeOut({
								complete : callback
							});
				};
				this.setContent = setContent;
				this.show = show;
				this.hide = hide;
			};
			module.exports = ContentWindow;
		});