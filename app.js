const express = require( 'express' );
const nunjucks = require( 'nunjucks' );
const morgan = require( 'morgan' );
const tweetBank = require('./tweetBank');
const app = express();

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache:true});

const inputs = {
  title: "An Example",
  people: [
    { name: 'Gandalf'},
    { name: 'Frodo' },
    { name: 'Hermoine'}
    ],
  message: "Lord of the rings was the greatest movie of all time!"
};

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

nunjucks.render('index.html', inputs, function(err,output) {
    console.log(output);
});

nunjucks.configure('view', {noCache:true});

app.use((req,res,next)=>{
  console.log('This Request = ', req.method);
  next();
});

app.use('/special/', (req,res,next)=>{
  console.log('You reached the special area!');
  next();
})

app.get('/', (req,res)=>{
  res.render('index', {title: inputs.title, people:inputs.people, message:inputs.message})
});

app.get('/news', (req,res)=>{
  res.send("Here's the News");
});

const port = 3000;
app.listen(port, ()=>{
  console.log(`server listening on ${port}`);
});

