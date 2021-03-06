"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logic_trans_1 = require("../logic/logic-trans");
var express = require("express");
var router = express.Router();
router.post('/', function (req, res) {
    console.log('transaction started', req.session.user);
    var transSvc = new logic_trans_1.default(req.querySvc, req.session.user);
    transSvc.transact()
        .then(function () { return res.redirect('/app/account'); })
        .catch(function (err) {
        console.log(err);
        res.redirect('/app/account');
    });
});
exports.default = router;
//# sourceMappingURL=user-trans.js.map