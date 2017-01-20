const homeController = require('../controllers/homeController');
const ajaxController = require('../controllers/ajaxController');
module.exports = function(router) {
    //page
    router.get('/', homeController.index);

    router.get('/login', homeController.login);

    //router.get('/balance', homeController.balance);

    //ajax
    router.get('/ajax/login.do', ajaxController.login);

}