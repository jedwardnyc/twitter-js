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


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
  console.log(`server listening on ${port}`);
});

