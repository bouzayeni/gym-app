const express = require ('express')
const app = express();
const path = require('path');
require('dotenv').config() ;
//database config
const connectDB = require('./config/connectDB');
connectDB();

app.use(express.json());
// For the deploy
app.use(express.static(path.join(__dirname, "client", "build")));
// Rendering the front end 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});




const cors = require('cors');
app.use(cors('https://gym--application.herokuapp.com/'));


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