const router = require('express').Router();

const City = require('../models/city');
const Sector = require('../models/sector');
const Neighborhood = require('../models/neighborhood');
const Hub = require('../models/hub');
const User = require('../models/user');
const Post = require('../models/post');

router.route('/').get((req, res) => {
  res.json({"hello": "world"});
});

router.route('/addCity').post((req, res) => {
  try {
    let newCity = new City(req.body);
    newCity.save()
      .then(console.log)
      .catch(console.error);
    res.type('text').send('City created');
  } catch(err) {
    res.type('text').status(500).send('Error: ' + err);
  }
});

router.route('/addSector').post((req, res) => {
  try {
    let newSector = new Sector(req.body);
    newSector.save()
    .then(console.log)
    .catch(console.error);
    res.type('text').send('City created');
  } catch(err) {
    res.type('text').status(500).send('Error: ' + err);
  }
});

router.route('/addNeighborhood').post((req, res) => {
  try {
    let newNeighborhood = new Neighborhood(req.body);
    newNeighborhood.save()
    .then(console.log)
    .catch(console.error);
    res.type('text').send('City created');
  } catch(err) {
    res.type('text').status(500).send('Error: ' + err);
  }
});

router.route('/addHub').post((req, res) => {
  try {
    let newHub = new Hub(req.body);
    newHub.save()
    .then(console.log)
    .catch(console.error);
    res.type('text').send('City created');
  } catch(err) {
    res.type('text').status(500).send('Error: ' + err);
  }
});

router.route('/addUser').post((req, res) => {
  try {
    let newUser = new User(req.body);
    newUser.save()
    .then(console.log)
    .catch(console.error);
    res.type('text').send('City created');
  } catch(err) {
    res.type('text').status(500).send('Error: ' + err);
  }
});

router.route('/addPost').post((req, res) => {
  try {
    let newPost = new Post(req.body);
    newPost.save()
    .then(console.log)
    .catch(console.error);
    res.type('text').send('City created');
  } catch(err) {
    res.type('text').status(500).send('Error: ' + err);
  }
});

module.exports = router;