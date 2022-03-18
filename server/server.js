const express = require ('express')
const app = express();
const path = require('path');
require('dotenv').config() ;
//database config
const connectDB = require('./config/connectDB');
connectDB();

app.use(express.json());





const cors = require('cors');
app.use(cors('http://localhost:3000'));


// routes
app.use('/api/person',require('./routes/personRoute'));
app.use('/api/admin',require('./routes/adminRoute'));
app.use('/api/post',require('./routes/postRoute'));
app.use('/api/comment',require('./routes/commentRoute'));
// images path
app.use('/uploads',express.static(path.join(__dirname, '../','img-uploads')))

// rendering the front end 
app.use(express.static(path.join(__dirname, '../','client','build')))



app.listen(process.env.PORT, (err)=>err?console.log(err):console.log(`server is runing`))