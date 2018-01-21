const express = require( 'express' );
const app = express();

app.use((req,res,next)=>{
  console.log('This Request = ', req.method);
  next();
});

app.use('/special/', (req,res,next)=>{
  console.log('You reached the special area!');
  next();
})

app.get('/', (req,res)=>{
  res.send('Hello there!');
});

app.get('/news', (req,res)=>{
  res.send("Here's the News");
});

const port = 3000;
app.listen(port, ()=>{
  console.log(`server listening on ${port}`);
});

