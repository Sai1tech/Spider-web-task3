const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.listen(3000);
app.use(express.static('public'));
const sellers = require('./models/different_schema');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(bodyParser.json());

const dbURI = "mongodb+srv://trail:login1@cluster0.vskko.mongodb.net/tail?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log('MongoDB connected...'))
    .catch((err) => console.log(err));

// db.collection.createIndex()

app.post('/tail', (req,res)=>{
	const seller = new sellers(req.body);

	seller.save()
	.then((result)=>{
		res.render('account');
	}).catch((err)=> {console.log(err)});
})

app.post('/login', async (req,res)=>{
	const lusername = req.body.username;
	const lpassword = req.body.password;
  const user = await sellers.findOne({
        username: lusername
    });
    if (!user)
    	{
    		res.send('no user found');
    	}
    else {
    	 lpassword == user.password ? res.send("done u r logged in"):res.send("incorrect");
    }
	
})

app.get('/', (req,res)=>{
    res.render('login');
})

app.get('/about', (req,res)=>{
    res.render('about');
})

app.get('/register', (req,res)=>{
	res.render('register');
})

app.use((req,res)=>{
    res.render('404');
})




//*************************************************************************************************************
