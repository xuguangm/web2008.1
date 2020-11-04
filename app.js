const express=require('express');
const ajaxRouter=require('./router/ajax.js');
const bodyParser=require('body-parser');
const pool=require('./pool.js');
const app=express();
app.listen(8080);
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({
	extended:false
}));

app.use('/ajax',ajaxRouter);
