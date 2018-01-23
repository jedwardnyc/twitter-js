const express = require('express');
const router = express.Router();


// can also be written as const router = require('express').Router();


const tweetBank = require('../tweetBank');
router.get('/', (req,res)=>{
  let tweets = tweetBank.list();
  res.render('index', {tweets});
});

module.exports = router;

