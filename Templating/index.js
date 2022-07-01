const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // instead of being the current directory where i executed the filme from where I was located when i ran nodemn. Instead of using that I want you to use the directory name where index.js is located

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render('subreddit', { ...data });
  } else {
    res.render('notfound', { subreddit });
  }
});

app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000');
});
