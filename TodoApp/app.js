import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import request from 'request';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();
app.use(express.json())
app.use(express.static(__dirname + '/public')); 
app.use(express.urlencoded({ extended: true }))
var port = 2000; 



app.post('/submit', (req, res) => {

    var todo = req.body;

    request.post('http://c_mongo:27017/submit',{form: todo},(err,resp,body) => {
        if(err){
            res.send(err);
        }else {
            console.log(body);
            res.send(body);
        }
    })

})

app.listen(port, () => {
    console.log('listening for requests on port 2000')
  })







