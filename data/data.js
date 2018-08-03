// 引入 express 模块
const express = require('express');

// 创建 express 实例
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//设置跨域访问
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
})
// 链接数据库
const mysql = require('mysql');
const conn = mysql.createConnection({
	host: '127.0.0.1',
	// port:'3306',
	user: 'root',
	password: '',
	database: 'zt'
});
conn.connect();

// 产品中心请求分类
app.post('/product', (req, res) => {
	var sql = "select `name`,`path`,`src`,`p`,`id` from `product` where `pid`='0'";
	conn.query(sql, function (error, result) {
		res.json(result);
	})
})

// 产品中心每个子类list
app.post('/product/list', function (req, res) {
	var sql = "select `name` ,`src` ,`p`,`parname` from `product` where `pid`= '" + req.body.id + "'";
	conn.query(sql, function (error, result) {
		console.log(result)
		res.json(result)
	})
});

// 解决方案的post请求
app.post('/project', function (req, res) {
	var sql = "select `name`,`id`,`datetime` from `project`";
	conn.query(sql, function (error, result) {
		res.json(result);
	})
});

// 解决方案的访问次数
app.post('/project/detail1', function (req, res) {
	var sql = "select `num`,`datetime` from `project` where `id`= '" + req.body.id + "'";
	conn.query(sql, function (error, result) {
		var addnum = Number(result[0].num) + 1
		console.log(result)
		var num = "update `project` set `num` = '" + addnum + "' where `id`= '" + req.body.id + "'";
		conn.query(num, function (error, res) {
			if (error) {
				console.log(error)
			}
		})
		res.json(result[0])
	})
});

// 监听到8000端口
app.listen(8000, function () {
	console.log('Hello World is listening at port 8000');
});