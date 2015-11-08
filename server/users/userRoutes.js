var userController = require('./userController.js');


module.exports = function (app) {
  // app === userRouter injected from middlware.js

  //app.get('/signin', userController.signin);
  //app.get('/signup', userController.signup);

  app.post('/signin', userController.signin);
  app.post('/signup', userController.signup);
  app.get('/signedin', userController.checkAuth);
};
