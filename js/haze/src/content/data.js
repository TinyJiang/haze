/**
 * 数据
 */
define(function(require, exports, module) {
	var data = {
		index : {
			title : '雾霾',
			text : [
					'雾霾（wù mái,英语表达为smog/haze）是雾和霾的组合词。雾霾现象常见于城市。中国不少地区将雾并入霾一起作为灾害性天气现象进行预警预报，统称为“雾霾天气”。近年来，由于空气质量恶化，雾霾现象出现增多且危害加重。如遇雾霾天气尽量做好防范措施，如：戴口罩，并尽量避免户外活动。',
					'2013年，“雾霾”成为年度关键词。这一年的1月，4次雾霾过程笼罩30个省（区、市），在北京，仅有5天不是雾霾天。有报告显示，中国最大的500个城市中，只有不到1%的城市达到世界卫生组织推荐的空气质量标准，与此同时，世界上污染最严重的10个城市有7个在中国。']
		},
		image : {
			title : '图片',
			images : ['s1.jpg', 's2.jpg', 's3.jpg', 's4.jpg', 's5.jpg',
					's6.jpg']
		},
		active : {
			title1 : '雾霾成因',
			title2 : '健康提醒',
			msg1 : '雾霾的成因有哪些？全部答对有惊喜哦。',
			msg2 : '如何减少雾霾的危害？全部答对有惊喜哦。',
			trueReasons : ['大气空气气压低，空气不流动。', '地面灰尘大，空气湿度低，地面的人和车流使灰尘搅动起来。',
					' 汽车尾气的污染物排放', '工厂制造出的二次污染', '冬季取暖排放的CO2等污染物'],
			falseReasons : ['公共场合抽烟'],
			trueActives : ['尽量减少外出。如果不得不出门时，最好戴上口罩。',
					'患者坚持服药。呼吸病患者和心脑血管病患者在雾天更要坚持按时服药',
					'别把窗子关得太严。可以选择中午阳光较充足、污染物较少的时候短时间开窗换气。',
					'尽量远离马路。上下班高峰期和晚上大型汽车进入市区这些时间段，污染物浓度最高。', '补钙、补维D，多吃豆腐、雪梨等'],
			falseActives : ['每天坚持晨练', '每天都开车上下班。']
		},
		about : {
			title : '关于',
			title2 : '相关链接',
			desc : '<br>&nbsp&nbsp&nbsp&nbsp本网页主题为雾霾的知识普及以及提醒人们如何减少雾霾所带来的危害。采用图片与小游戏的形式吸引用户了解关于雾霾的信息。<br>&nbsp&nbsp&nbsp&nbsp采用最新的前端展示技术HTML5+CSS3结合JavaScript语言与jquery框架编写，风格简洁明了。<br><br>',
			links : [{
				text : '百度百科-雾霾',
				url : 'http://baike.baidu.com/link?url=ONXHlMSQ_be2NcARxN2IAEKyHBPHdlbocoMOE9O2OFl1sgXqiCU_JmIh-cWtJYZW'
			}, {
				text : '维基百科-雾霾',
				url : 'http://zh.wikipedia.org/wiki/%E9%9B%BE%E9%9C%BE'
			}, {
				text : '百度图片-雾霾',
				url : 'http://image.baidu.com/i?tn=baiduimage&ct=201326592&lm=-1&cl=2&nc=1&word=%E9%9B%BE%E9%9C%BE&ie=utf-8'
			}, {
				text : 'W3School-HTML5',
				url : 'http://www.w3school.com.cn/html5/index.asp'
			}, {
				text : 'W3School-CSS3',
				url : 'http://www.w3school.com.cn/css3/index.asp'
			}, {
				text : 'Jquery',
				url : 'http://api.jquery.com/'
			}]
		}
	};
	module.exports = data;
});
