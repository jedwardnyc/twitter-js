const express = require('express');
const router = express.Router();


// can also be written as const router = require('express').Router();


const tweetBank = require('../tweetBank');
router.get('/', (req,res)=>{
  let tweets = tweetBank.list();
  res.render('index', {tweets});
});

router.get('/users/:name', (req,res)=>{
  var name = req.params.name;
  list = tweetBank.find({name});
  res.render( 'index', {tweets:list});
})

router.get('/tweets/:id', (req,res)=>{
  var id = parseInt(req.params.id);
  tweetAtId = tweetBank.find({id});
  res.render( 'index', {tweets:tweetAtId})
})

module.exports = router;

