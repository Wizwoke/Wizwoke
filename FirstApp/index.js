const express = require('express');
const app = express();

// Need to comment this out because everytime we send a res.send we are done for that one request. We can't have a http request that gets more than one response!

// app.use((req, res) => {
//   // everytime we get a request this callback will run
//   console.log('WE GOT A NEW REQUEST');
//   // res.send({ color: 'red' });
//   res.send('<h1>This is my webpage</h1>');
// });

// Routing refers to taking incoming requests and a path that is requested and matching that to some code and some response

// /cats => "meow"
// /dogs => "woof"
// "/"

app.get('/', (req, res) => {
  res.send('THIS IS THE HOMEPAGE!!!!!');
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browing the ${subreddit} subreddit</h1>`);
});
app.get('/r/:subreddit/:postId', (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
});

app.get('/cats', (req, res) => {
  res.send('MEOOOOW');
});
app.post('/cats', (req, res) => {
  res.send('POST REQUEST TO /CATS!!!!! THIS IS DIFFERENT THAN A GET REQUEST');
});
app.get('/dogs', (req, res) => {
  res.send('WOOOOF');
});

app.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send('NOTHING FOUND IF NOTHING SEARCHED');
  }
  res.send(`<h1>Search results for: ${q}</h1>`);
});

app.get('*', (req, res) => {
  res.send('I DONT KNOW THAT ROUTE TO THAT PATH');
}); //* matches everything, this should be added at the end or else all the others will be ignored

app.listen(8080, () => {
  console.log('LISTENING ON PORT 8080');
});
