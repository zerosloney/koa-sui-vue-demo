var homeController = require('../controllers/homeController');

module.exports = function (router) {

  router.get('/',homeController.index);

};
