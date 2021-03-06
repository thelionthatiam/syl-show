"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logic_middleware_1 = require("../logic/logic-middleware");
function renderState(req, res, next) {
    if (res.locals.permission === 'user') {
        res.locals.loggedIn = true;
        req.RenderStateSvc = new logic_middleware_1.RenderStateSvc(req.querySvc, req.session.user);
        req.RenderStateSvc.getEverything()
            .then(function (user) {
            res.locals.user = user;
            res.locals.stringUser = JSON.stringify(user);
            next();
        })
            .catch(function (err) {
            console.log(err);
            res.locals.userState = null;
            res.locals.permission = 'guest';
            res.render('error', { errMessage: err });
        });
    }
    else {
        res.locals.loggedIn = false;
        next();
    }
}
//
exports.default = renderState;
//# sourceMappingURL=server-render-state.js.map