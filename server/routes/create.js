const router = require('express').Router();

const Post = require('../models/post');


router.route('/').get((req, res) => {
  res.json({"hello": "World"});
});

router.route('/createPublication').post((req, res) => {
  try {
    let newPost = new Post(req.body);
    newPost.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  } catch(err) {
    res.type('text').status(500).send('Error: ' + err);
  }
})

module.exports = router;