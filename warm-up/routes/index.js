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
    res.render('main', { title: 'Main' });
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
    var user = new db.User();

    // Submit to the DB
    user.username = username;
    user.password = password;
    user.save(function(err, doc) {
        if (err) {
            // If it failed. return err
            if (err.name == 'ValidationError' && err.errors.username) {
                res.json({"error_code": -1});
            } else if (err.name == 'ValidationError' && err.errors.password) {
                res.json({"error_code": -2});
            } else if (err.name == 'MongoError' && err.code == 11000) {
                // name already existed
                res.json({"error_code": -3});
            } else {
                res.json({"error_code": -5});
            }
        } else {
            // And forward to success page
            res.redirect('/welcome');
        }
    });
});

router.post('/login', function(req, res) {
});

router.post('/clearData', function(req, res) {
});

module.exports = router;
