/**
 * 正确错误选择小游戏
 */
define(function(require, exports, module) {
	var GameBox = function(container, trueData, falseData, type, callback) {
		var d = require('./data').active;
		var currentIndex = -1;// 未开始状态，题目index
		var result = true;// 答题结果,错一题即失败
		var tests = [];// 题库

		var startBtn = null;
		var yesBtn = null;
		var noBtn = null;
		var initTests = function() {
			var count1 = 0;
			var count2 = 0;
			for (var i = 0; i < (trueData.length + falseData.length); i++) {
				var randomNum = Math.random();
				var t = null;
				if (randomNum > 0.5) {// 从正确的题目中获取题目
					if (count1 < trueData.length) {
						t = {
							test : trueData[count1],
							ans : true
						};
						count1 += 1;
					} else {
						t = {
							test : falseData[count2],
							ans : false
						};
						count2 += 1;
					}
				} else {// 从错误的题设中获取题目
					if (count2 < falseData.length) {
						t = {
							test : falseData[count2],
							ans : false
						};
						count2 += 1;
					} else {
						t = {
							test : trueData[count1],
							ans : true
						};
						count1 += 1;
					}
				}
				tests.push(t);
			}
		};
		var showMsg = function(msg) {
			var msgBox = container.find('div.msgBox');
			msgBox.fadeOut(function() {
						msgBox.empty();
						msgBox.append('<a>' + msg + '</a>');
						msgBox.fadeIn();
					});
		};

		var showBtn = function(btn) {
			btn.css({
						display : 'inline-block'
					});
		}

		var start = function() {
			startBtn.hide();
			showBtn(yesBtn);
			showBtn(noBtn);
			goNext();
		};

		var end = function() {
			currentIndex = -1;
			result = true;
			yesBtn.hide();
			noBtn.hide();
			showBtn(startBtn);
			showMsg(type == 0 ? d.msg2 : d.msg3);
		};

		var getNextTest = function() {// 获取下个题目
			if (currentIndex + 1 < tests.length) {
				var t = tests[currentIndex + 1];
				currentIndex += 1;
				return t;
			} else {
				return null;
			}
		};

		var goNext = function() {
			var t = getNextTest();
			if (t) {
				showMsg(t.test);
			} else {
				if (result) {
					alert('恭喜你，全都答对啦！');
					if (typeof(callback) == 'function') {
						callback();
					}
				} else {
					alert('还有错哦，再接再厉！');
				}
				end();
			}
		};

		var judgeResult = function(rs) {
			var t = tests[currentIndex];
			if (rs == t.ans) {// 回答正确
			} else {// 回答错误
				container.css({
							'background' : 'red'
						});
				setTimeout(function() {
							container.css({
										'background' : '#FFF'
									});
						}, 200);
				result = false;
			}
			goNext();
		};

		var init = function() {
			container.addClass('gameBox');
			container.empty();
			startBtn = $('<a class="button blue big">开始</a>');
			yesBtn = $('<a class="button blue big">是</a>');
			noBtn = $('<a class="button blue big">否</a>');
			yesBtn.hide();
			noBtn.hide();
			if (type == 0) {
				var person = $('<img src="../static/haze/img/game/doctor.jpg" class="people FL"/>');
				var dia = $('<img src="../static/haze/img/game/dia1.png" class="dia FL"/>');
				var msgBox = $('<div class="msgBox pLeft">' + d.msg1 + '</div>');
				var optBox = $('<div class="optBox FR"></div>');
				optBox.append(startBtn);
				optBox.append(yesBtn);
				optBox.append(noBtn);
				container.append(msgBox);
				container.append(optBox);
				container.append(person);
				container.append(dia);
			} else if (type == 1) {
				var person = $('<img src="../static/haze/img/game/smart.jpg" class="people FR"/>');
				var dia = $('<img src="../static/haze/img/game/dia2.png" class="dia2 FR"/>');
				var msgBox = $('<div class="msgBox pRight">' + d.msg2
						+ '</div>');
				var optBox = $('<div class="optBox FL"></div>');
				optBox.append(startBtn);
				optBox.append(yesBtn);
				optBox.append(noBtn);
				container.append(msgBox);
				container.append(optBox);
				container.append(person);
				container.append(dia);
			}
			initTests();
			startBtn.click(function() {
						start();
					});
			yesBtn.click(function() {
						judgeResult(true);
					});
			noBtn.click(function() {
						judgeResult(false);
					});
		}
		this.init = init;
	};
	module.exports = GameBox;
});