var query = require('../functions/queries');
var lib = require('../functions/lib');
var helper = require('../functions/helpers');
var express = require('express');
var router = express.Router();
// import * as lib from '../functions/lib';
// import * as helper from '../functions/helpers';
// import * as express from 'express';
// let router: any  = express.Router();
router.get('/to-login', function (req, res, next) {
    console.log('/to-login');
    res.render('login', null);
});
router.post('/login', function (req, res, next) {
    console.log('/login');
    var thisPage = 'login';
    var nextPage = 'account-actions';
    var inputs = {
        email: req.body.email,
        password: req.body.password,
    };
    req.querySvc.selectRowViaEmail(inputs, function (err, result) {
        if (err) {
            helper.dbError(res, thisPage, err);
        }
        else {
            if (result.rows.length === 0) {
                helper.genError(res, thisPage, "Email not found"); // u
            }
            else {
                var output = result.rows[0];
                var realPass = output.password;
                helper.hashCheck(req.body.password, realPass, function (err, result) {
                    if (err) {
                        // expand error translator to include bcrypt?
                        helper.genError(res, thisPage, "Password encryption error"); // u
                    }
                    else if (result === false) {
                        helper.genError(res, thisPage, "Password incorrect."); // u
                    }
                    else {
                        req.session.user = [output.email, output.password, output.phone];
                        req.session.userID = output.user_uuid;
                        res.render(nextPage, {
                            title: 'yo',
                            email: req.session.user[0],
                        });
                    }
                });
            }
        }
    });
});
router.post('/log-out', function (req, res, next) {
    console.log('/log-out');
    var thisPage = 'login';
    var nextPage = 'index';
    lib.logout(req, res, thisPage);
});
router.post('/delete', function (req, res, next) {
    console.log('/delete');
    var thisPage = 'login';
    var nextPage = 'index';
    var inputs = {
        email: req.body.email,
        password: req.body.password,
    };
    req.querySvc.selectRowViaEmail(inputs, function (err, result) {
        if (err) {
            res.render(thisPage, { dbError: err, accountDelete: true });
        }
        else {
            if (result.rows.length === 0) {
                res.render(thisPage, { dbError: 'Email not found.', accountDelete: true });
            }
            else {
                var output = result.rows[0];
                var realPass = output.password;
                helper.hashCheck(req.body.password, realPass, function (err, result) {
                    if (err) {
                        res.render('error', { errName: err, errMessage: "Password encryption error" });
                    }
                    else if (result === false) {
                        res.render(thisPage, { dbError: err, accountDelete: true });
                    }
                    else {
                        req.querySvc.removeUserViaEmail(inputs, function (err, result) {
                            if (err) {
                                helper.dbError(res, thisPage, err);
                            }
                            else {
                                res.render(nextPage, { title: "Welcome back!", subtitle: "Your account was deleted, make a new one if you want to come back in" });
                            }
                        });
                    }
                });
            }
        }
    });
});
module.exports = router;
//# sourceMappingURL=authorize.js.map