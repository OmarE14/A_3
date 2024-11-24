var express = require('express');
var router = express.Router();


/* routing operations used to direct users to page which corresponds to the nav link */


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/aboutus', function(req, res, next) {
  res.render('index', { title: 'About us' });
});


router.get('/contactus', function(req, res, next) {
  res.render('index', { title: 'Contact Us' });
});


/* route to get the public data list command and show some of the contents */

router.get('/showlist', function(req, res, next) {
  const BookList = [
    { Name: 'Zahir', PhoneNumber: '416-308-9089', Email:'zvhirrrr@outlook.com', Notes:'Old friend from Highschool' },
    {Name:'Abdo', PhoneNumber:'105-559-0859',Email:'abdo_g@yahoo.com', Notes:'My Cousin'}
  ];

  res.render('index', { title: 'Current Contacts', BookList });
});






module.exports = router;
