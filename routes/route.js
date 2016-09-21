const homeController = require('../controllers/homeController');

module.exports = function (router) {
  router.get('/',homeController.index);

  router.get('/balance',homeController.balance);

};
