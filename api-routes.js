let router =  require('express').Router();

router.get('/', function(req, res){
    res.json({
        status: 200,
       message: 'Contacts App home',
    })
});

var contactController = require('./controller/contactController');

router.route('/contacts')
    .get(contactController.index)
    .post(contactController.create);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

module.exports = router;    