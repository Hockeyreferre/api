const express = require('express');
const User = require('../models/user');
const router = express.Router();
var async = require('async');

router.get('', async (req, res) => {
    res.render('login', {});
})

router.post('/login', async (req, res) => {
    async.waterfall([
        function (callback) {
          User.findOne({
            name: req.body.email
          }, function (err, result) {
            if (err) {
              console.log(err);
              res.send({error: "An error has occurred"});
            } else {
              if (result == null) {
                res.send({"error": "This email address is not recognised, please check you have entered your email correctly"});
              } else {
                callback(null, result);
              }
            }
          });
        },
        async function (result, callback){
          var password = result.password;
          if (req.body.password !== password){
            res.send({"error":"Sorry your password is incorrect"});
          } else {
            res.redirect('/ligaauswahl')
            await User.findOneAndUpdate({name: req.body.email}, {loggedIn: true}, {new : true})
          }
        }
      ])
})

router.post('/logout', async (req, res) => {
  await User.findOneAndUpdate({name: req.body.email}, {loggedIn: false}, {new : true})
  res.redirect('/')
})

module.exports = router;