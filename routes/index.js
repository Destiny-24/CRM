//页面路由
var express = require('express');
var router = express.Router();
var userController = require('./../controllers/user.js');
var authController = require('./../controllers/auth.js');
var authMiddleware = require('./../middlewares/auth.js');
var clueController = require('./../controllers/cule.js');

//页面地址渲染
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin/login',function(req,res,next){
  res.render('admin/login');
});
router.get('/admin/login', authController.renderLogin);
router.get('/admin/user', userController.show);
router.get('/admin/user/create', userController.renderUserCreate);
router.get('/admin/user/:id/edit', userController.edit,userController.delete);

router.get('/admin/clue', clueController.show);
router.get('/admin/clue/:id', clueController.log);
router.get('/admin/user', authMiddleware.mustLogin, authMiddleware.mustRoot, userController.show);
router.get('/admin/user/create', authMiddleware.mustLogin, authMiddleware.mustRoot, userController.renderUserCreate);
router.get('/admin/user/:id/edit', authMiddleware.mustLogin, authMiddleware.mustRoot, userController.edit);

module.exports = router;
