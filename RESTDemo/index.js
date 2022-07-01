const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
  { id: 1, username: 'Todd', comment: 'lol that is so funny!' },
  {
    id: 2,
    username: 'Skyler',
    comment: 'I like to go birdwatching with my dog',
  },
  { id: 3, username: 'Sk8erboi', comment: 'Plz delete your account, Todd' },
  { id: 4, username: 'onlysayswoof', comment: 'woof woof woof' },
];

// * GET /comments - List all comments

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
});

// * POST /comments - Create a new comment

// this route just serves a form, renders a form

app.get('/comments/new', (req, res) => {
  res.render('comments/new');
});

// this route is where the form above submits its data to

app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.redirect('/comments');
});

// * GET /comments/:id - Get one comment (using id)

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === parseInt(id));
  res.render('comments/show', { comment });
});

// * PATCH /comments/:id - Update one comment
// * DELETE /comments/:id - Destroy one comment

app.listen(3000, () => {
  console.log('ON PORT 3000');
});
