/**
 * 图片
 */
define(function(require, exports, module) {
	var data = require('./data');
	var d = data.image;
	var ContentWindow = require('../ContentWindow');
	var cw = new ContentWindow($('#imageWindow'));
	var content = $('<div style="position:relative;"></div>');

	content.append('<h>' + d.title + '</h>');
	content.append('<br>');

	var baseUrl = '../static/haze/img/samples/';

	var countXY = function(index) {
		var x = index % 3;
		var y = Math.floor(index / 3);
		return {
			x : x * 255,
			y : y * 185 + 60
		};
	};

	$.each(d.images, function(i, img) {
				var dom = $('<img class="sampleImg" src="' + baseUrl + img
						+ '"/>');
				var p = countXY(i);
				dom.css({
							top : p.y,
							left : p.x
						});
				dom.hover(function() {
							$(this).css({
										'z-index' : 2
									});
							$(this).stop().animate({
										width : 270,
										height : 200,
										top : p.y - 10,
										left : p.x - 10
									}, 300, 'easeOutBack', function() {
									});
						}, function() {
							$(this).css({
										'z-index' : 1
									});
							$(this).stop().animate({
										width : 250,
										height : 180,
										top : p.y,
										left : p.x
									}, 300, 'easeOutBack', function() {
									});
						});
				content.append(dom);
			});

	var more = $('<a class="more" href="http://image.baidu.com/i?tn=baiduimage&ct=201326592&lm=-1&cl=2&nc=1&word=%E9%9B%BE%E9%9C%BE&ie=utf-8" target="baiduImg">查看更多图片...</a>');
	var moreP = countXY(d.images.length);
	more.css({
				top : moreP.y,
				left : 270
			});
	content.append(more);
	cw.setContent(content);
	module.exports = cw;
});
