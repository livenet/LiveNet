var express = require('express');
var router = express.Router();
var crypto = require('crypto'),
		User = require('../models/user');

module.exports = function(app) {
	//#主页
	app.get('/', function(req, res) {
		res.render('index', {
			title: '主页',
			user: req.session.user
		});
	});
	//登录
	app.post('/login', function(req, res) {
		var md5 = crypto.createHash('md5'),
			password = md5.update(req.body.password).digest('hex');
		User.get(req.body.name, function(err, user) {
			if(!user) {
				//用户名不存在
				return res.redirect('/login?error=1');
			}
			if(user.password != password) {
				//密码错误
				return res.redirect('/login?error=2');
			}
			req.session.user = user;
			res.redirect('/');
		});
	});

	//＃注册页面
	app.get('/reg', function(req, res) {
		res.render('reg', {title: '注册'});
	});
	//接收注册
	app.post('/reg', function(req, res) {
		var name = req.body.name,
			password = req.body.password,
			password_re = req.body['password-repeat'];
		if(password !== password_re) {
			//密码不一致
			return res.redirect('/reg?error=1');
		}

		var md5 = crypto.createHash('md5'),
			password = md5.update(password).digest('hex');
			var nUser = new User({
			name: name,
			password: password,
			email: req.body.email
		});

		User.get(name, function(err, user) {
			if(err) {
				//服务器错误
				return res.redirect('/reg?error=2');
			}
			if(user){
				//用户名已存在
				return res.redirect('/reg?error=3');
			}
			nUser.save(function(err, user) {
				if(err) {
					//服务器错误
					return res.redirect('/reg?error=2');
				}
				req.session.user = user;
				console.log(req.session);
				res.redirect('/');
			});
		});
	});

	// ＃视频列表页
	app.get('/liveList', function(req, res) {

	});

	// #视频直播页
	app.get('/live', function(req, res) {

	});

	// ＃个人中心页
	app.get('/profile', function(req, res) {

	});

	//#搜索
	app.get('/search', function(req, res) {

	});

	//#退出
	app.get('/logout', function(req, res) {
		req.session.user = null;
		res.redirect('/');
	});
}