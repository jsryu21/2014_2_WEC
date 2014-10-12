var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    if (req.session.username) {
        res.redirect('/welcome');
    } else {
        res.redirect('/main');
    }
});

router.get('/main', function(req, res) {
    res.render('main', {});
});

router.get('/welcome', function(req, res) {
    res.render('welcome', {});
});

router.post('/signup', function(req, res) {
    // Set up internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var username = req.body.username;
    var password = req.body.password;

    // Set our model
    var model = db.get('UsersModel');

    // Submit to the DB
    model.insert({
        "username" : username,
        "password" : password,
        "count" : 0
    }, function(err, doc) {
        if (err) {
            // If it failed. return err
            res.send("There was a probelm adding the information to the database.");
        } else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("userlist");
            // And forward to success page
            res.redirect("userlist");
        }
    });
});

module.exports = router;
