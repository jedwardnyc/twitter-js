const _ = require('lodash');

var data = [];

function add (name, content){
  data.push({ name: name, content: content, id: data.length });
}

function list (){
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data,properties))
}

module.exports = { add, list, find }

const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

const getTweetId = function(){
  return Math.floor(Math.random() * 1000);
}

for (let i=0; i<10; i++){
  module.exports.add( getFakeName(), getFakeTweet());
}

