var express = require('express')
var app = express()
app.use(express.static(__dirname));

var bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html');
})
 

app.get('/send',function(req,res){
	console.log(req.query);
	//res.send('test');
	var value1=req.query.value1;
	var value2=req.query.value2;
	if (!isNaN(value1)&&!isNaN(value2)){
		var sum=+value1+ +value2;
		res.send(sum.toString());
	}
	else
		res.send('Невірні дані!');
})


app.post('/send',function(req,res){
	console.log(req.body);
	//res.send('test');
	var value1=req.body.value1;
	var value2=req.body.value2;
	if (!isNaN(value1)&& !isNaN(value2)){
		var sum=+value1+ +value2;
		res.send(sum.toString());
	}
	else
		res.send('Невірні дані!');
})

app.post('/send1',function(req,res){
	console.log(req.body);
	//res.send('test');
	var value1=req.body.value3;
	var value2=req.body.value4;
	if (!isNaN(value1)&& !isNaN(value2)){
		var sum=+value1+ +value2;
		res.send(sum.toString());
	}
	else
		res.send('Невірні дані!');
})



app.listen(8080)
console.log('Server run!');
