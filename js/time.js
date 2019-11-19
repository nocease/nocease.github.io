var nowtime = "";
var riqi = "";
var shijian = "";

function setTime() {

	//创建Date对象
	var date = new Date();

	//获取4位数的年份
	var y = date.getFullYear();

	//获取月份,结果是0-11，+1
	var m = addzore(date.getMonth() + 1);

	//获取日期
	var d = addzore(date.getDate());

	//获取星期，结果0-6
	var week = date.getDay();

	//获取时
	var hh = addzore(date.getHours());

	//获取分钟
	var mm = addzore(date.getMinutes());

	//获取秒
	var ss = addzore(date.getSeconds());

	//拼接字符串
	var time = y + "/" + m + "/" + d + " 星期" + weekD(week) + " " + hh + ":" + mm + ":" + ss;
	riqi = y + "-" + m + "-" + d;
	shijian = hh + ":" + mm + ":" + ss;


	nowtime = time;
	document.getElementById("time").innerHTML = time;
	document.getElementById("time").value = time;

}
setInterval("setTime()", 0, 500);

function weekD(a) {
	if (a == 1)
		return "一";
	else if (a == 2)
		return "二";
	else if (a == 3)
		return "三";
	else if (a == 4)
		return "四";
	else if (a == 5)
		return "五";
	else if (a == 6)
		return "六";
	else if (a == 0)
		return "日";
	else
		return a;
}

function addzore(num) {
	return num > 9 ? num : "0" + num;
}


// //用于获取url中？传递的值
// function geturl(name) {
// 	var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
// 	if (result == null || result.length < 1) {
// 		return "";
// 	}
// 	return unescape(result[1]);
// }
