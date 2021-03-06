var express = require('express');
var router = express.Router();
var userController = require('./../controllers/user.js');
var authController = require('./../controllers/auth.js');
var clueController = require('./../controllers/cule.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/user' , userController.insert);
router.put('/user/:id' , userController.update);
router.delete('/user/:id' , userController.delete);
router.post('/login' , authController.login);
//插入
router.post('/clue',clueController.insert);
router.put('/clue/:id' , clueController.update);
router.post('/clue/:id/log', clueController.addLog);

module.exports = router;
