const express = require( 'express' );
const nunjucks = require( 'nunjucks' );
const morgan = require( 'morgan' );
const routes = require( './routes' );
// const tweetBank = require('./tweetBank');
const app = express();


app.use('/', routes);
app.use(express.static('public'))
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache:true});

app.use((req,res,next)=>{
  console.log('This Request = ', req.method);
  next();
});

// app.use('/special/', (req,res,next)=>{
//   console.log('You reached the special area!');
//   next();
// })

// app.get('/news', (req,res)=>{
//   res.send("Here's the News");
// });
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
  console.log(`server listening on ${port}`);
});

