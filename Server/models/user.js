var mongodb = require('./db');
function User(user) {
	this.name = user.name;
	this.password = user.password;
	this.email = user.email;
  //收藏
  this.collection = [];
  //历史纪录
  this.history = [];
}

module.exports = User;

//存储用户信息
User.prototype.save = function(callback) {
  //要存入数据库的用户文档
  var user = {
      name: this.name,
      password: this.password,
      email: this.email,
      collection: this.collection,
      history: this.history
  };
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);//错误，返回 err 信息
    }
    //读取 users 集合
    db.collection('users', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);//错误，返回 err 信息
      }
      //将用户数据插入 users 集合
      collection.insert(user, {
        safe: true
      }, function (err, user) {
        mongodb.close();
        if (err) {
          return callback(err);//错误，返回 err 信息
        }
        callback(null, user.ops[0]);//成功！err 为 null，并返回存储后的用户文档
      });
    });
  });
};
//获取用户
User.get = function(name, cb) {
	mongodb.open(function(err, db) {
		if(err) {
			return cb(err);
		}
		db.collection('users', function(err, collection) {
			if(err) {
				mongodb.close();
				return cb(err);
			}
			collection.findOne({
				name: name
			}, function(err, user) {
				mongodb.close();
				if(err) {
					return cb(err);
				}
				cb(null, user);
			});
		});
	});
};

/*
修改密码
oldP旧密码 
newP新密码
*/
User.prototype.resetPassword = function(oldP, newP) {

}

/*
添加收藏
参数 视频ID
*/
User.prototype.addCollection = function(id) {

};

/*
获取收藏
*/
User.prototype.getCollection = function() {

};

/*
删除收藏
参数 视频ID
*/
User.prototype.removeCollection = function(id) {

};

/*
添加历史收看
参数 视频ID
*/
User.prototype.addHistory = function(id) {

};

/*
获取历史纪录
*/
User.prototype.getHistory = function() {

};

/*
删除历史纪录
参数 视频ID（如果没有就清空历史纪录）
*/
User.prototype.removeCollection = function(id) {
  throw new Error('暂未实现');
};





