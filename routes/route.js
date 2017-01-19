const homeController = require('../controllers/homeController');
const ajaxController = require('../controllers/ajaxController');
module.exports = function(router) {
    router.get('/', homeController.index);

    router.get('/login', homeController.login);

    router.get('/login/do', ajaxController.login)

    //router.get('/balance', homeController.balance);

};