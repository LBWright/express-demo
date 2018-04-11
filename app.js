const express = require('express');
const app = express();
const parser = require('body-parser');
let friends = ['Taylor', 'Alex', 'Cody', 'Zach', 'Remi']


app.use(parser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req,res){
  res.render('home')
})

app.get('/friends', function(req,res){
  res.render('friends', {friends: friends})
})

app.post('/addFriend', function(req,res){
  let newFriend = req.body.newFriend;
  friends.push(newFriend);
  res.redirect('friends')
})

app.listen(3000, '127.0.0.1', function(){
  console.log("Initializing server")
})
