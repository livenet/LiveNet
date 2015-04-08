var mongodb = require('./db');

// 单个监控对象
var Video = function (video) {
	// 名称
	this.name = video.name;
	// 描述
	this.description = video.description;
	// 链接地址？
	this.url = video.url;
	// 摄像头唯一标志
	this.id = video.id;
}

module.exports = Video;