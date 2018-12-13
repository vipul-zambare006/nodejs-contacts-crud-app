Contact = require('../model/contact');

exports.index = function (req, res) {
    debugger;
    Contact.get(
        function(err, contacts){
            if(err){
                res.json({
                    status: 404,
                    message: "Not found"
                })
            }
                res.json({
                    status: "200",
                    message: "contact retrieved successfully",
                    data: contacts
                });
        })    
}

exports.create = function(req, res){
    console.log('create req:',req.body)
    var contact = new Contact();
    contact.firstname = req.body.firstname ? req.body.firstname : contact.firstname;
    contact.lastname = req.body.lastname ? req.body.lastname : contact.lastname;
    contact.gender = req.body.gender;
    contact.age = req.body.age;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    contact.save(function(err){
            if (err){
                res.json(err);
            }
            else{
                res.json({
                    message: 'New contact created!',
                    data: contact
                });
            }
        });
};

exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};

exports.update = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
            if (err)
                res.send(err);
            else
            {
                contact.firstname = req.body.firstname ? req.body.firstname : contact.firstname;
                contact.lastname = req.body.lastname ? req.body.lastname : contact.lastname;
                contact.gender = req.body.gender;
                contact.age = req.body.age;
                contact.email = req.body.email;
                contact.phone = req.body.phone;
                
                contact.save(function (err) {
                    if (err)
                        res.json(err);
                    res.json({
                        message: 'Contact Info updated',
                        data: contact
                    });
            });
            }
    });
};

exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
    
            res.json({
                status: "success",
                message: 'Contact deleted'
            });
    });
};