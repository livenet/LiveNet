var mongodb = require('./db');

/*
	幼稚园
	幼稚园链接服务器过程：
	开机后发送自己的名字，备注信息，标识合监控列表（标识又服务器端生成还是客户端），
	服务器端验证幼稚园的有效性，
	有效
	同步视频信息，同步摄像头信息，生成幼稚园的流媒体地址，像幼稚园发送结果
	无效
	拒绝链接然后像幼稚园发送结果。
*/
var Kindergarten = function (k) {
	// 名字
	this.name = k.name;
	// 备注
	this.notes = k.notes;
	// 监控列表
	this.videos = k.videos;
	// 幼稚园唯一标识
	this.id = k.id;
};

module.exports = Kindergarten;

// 注册幼儿园，如果有该幼儿园就更新信息，没有就添加
Kindergarten.prototype.register = function() {
	/*幼稚园源有效性验证*/

};

// 同步信息
Kindergarten.prototype.sync = function() {

};

/*删除幼稚园*/
Kindergarten.delete = function(id) {
	throw new Error('暂未实现');
}

/*
获取幼稚园列表(需判断用户是否登录)
返回值 幼稚园列表［数组］ 每个幼稚园有监控列表
*/
Kindergarten.getList = function() {

};

/*
获取当前幼稚园的监控列表
返回值 监控列表［数组］
*/
Kindergarten.getVideos = function(id) {

};










