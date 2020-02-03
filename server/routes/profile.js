const router = require('express').Router();

router.route('/').get((req, res) => {
  try {
    res.json({
      "posts": [
        {
          "id": "1",
          "title": "Hello World",
          "description": "whats up this is an example post",
          "genre": "Poem",
          "author": "Estefan Hu",
          "credibility": 4927550
        },
        {
          "id": "2",
          "title": "A brave new world",
          "description": "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.",
          "genre": "Short Story",
          "author": "Estefan Hu",
          "credibility": 8763
        },
        {
          "id": "3",
          "title": "Another thing",
          "description": "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.",
          "genre": "Short Story",
          "author": "Estefan Hu",
          "credibility": 20495
        }
      ],
      "user": {
        "firstName": "Estefan",
        "lastName": "Hu",
        "email": "estefanhu@gmail.com",
        "credibility": 634205,
        "links": [
          "www.google.com",
          "www.facebook.com",
          "www.projectmuse.com"
        ]
      }
    });
  } catch(err) {
    res.type('text').status(500).send('Error: ' + err);
  }
});

router.route('/test').get((req, res) => {
  try {
    
    res.json({})
  } catch(err) {
    res.type('text').status(500).send('Error: ' + err);
  }
});

module.exports = router;