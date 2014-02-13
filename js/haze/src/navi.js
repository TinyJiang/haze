/**
 * 导航栏
 */
define(function(require, exports, module) {
			// import components
			var index = require('./content/index');
			var image = require('./content/image');
			var active = require('./content/active');
			var about = require('./content/about');

			var currentShow = null;// 当前显示的标签

			var initLayout = function() {
				$(function() {
							$('#navi > div').hover(function() {
										var $this = $(this);
										$this.find('h2').fadeIn();
										$this.find('img').stop().animate({
													'width' : '70px',
													'height' : '70px',
													'top' : '-9px',
													'left' : '-9px',
													'opacity' : '1.0'
												}, 500, 'easeOutBack',
												function() {
												});
									}, function() {
										var $this = $(this);
										$this.find('h2').fadeOut(200);
										$this.find('img').stop().animate({
													'width' : '52px',
													'height' : '52px',
													'top' : '0px',
													'left' : '0px',
													'opacity' : '0.1'
												}, 500, 'easeOutBack');
									});
						});
			};

			var bindClick = function() {
				$('#index').click(function() {
							if (currentShow != index) {
								if (currentShow) {
									currentShow.hide(function() {
												index.show();
												currentShow = index;
											});
								} else {
									index.show();
									currentShow = index;
								}
							}
						});
				$('#image').click(function() {
							if (currentShow != image) {
								if (currentShow) {
									currentShow.hide(function() {
												image.show();
												currentShow = image;
											});
								} else {
									image.show();
									currentShow = image;
								}
							}
						});
				$('#active').click(function() {
							if (currentShow != active) {
								if (currentShow) {
									currentShow.hide(function() {
												active.show();
												currentShow = active;
											});
								} else {
									active.show();
									currentShow = active;
								}

							}
						});
				$('#about').click(function() {
							if (currentShow != about) {
								if (currentShow) {
									currentShow.hide(function() {
												about.show();
												currentShow = about;
											});
								} else {
									about.show();
									currentShow = about;
								}
							}
						});
			};
			var navi = {
				init : function() {
					initLayout();
					bindClick();
					$('#index').trigger('click');
				}
			};
			module.exports = navi;
		});
