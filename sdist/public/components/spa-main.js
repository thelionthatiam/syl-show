"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var spa_stuff_1 = require("./spa-stuff");
var spa_contact_1 = require("./spa-contact");
var spa_new_account_1 = require("./spa-new-account");
var alarm_clock_1 = require("./alarm-clock");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    App.prototype.render = function () {
        return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement("div", { className: 'app-wrapper' },
                react_1.default.createElement("ul", { className: "app-menu" },
                    react_1.default.createElement("div", { className: 'app-menu-title-wrapper' },
                        react_1.default.createElement("img", { className: 'formIcon fadeIn', src: '/icons/logo-placeholder.svg' }),
                        react_1.default.createElement("h1", { className: 'app-menu-title' }, "s.y.l.")),
                    react_1.default.createElement("li", { className: 'app-menu-li' },
                        react_1.default.createElement("img", { className: 'formIcon fadeIn', src: '/icons/white/clock-alarm.svg' }),
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/alarms", className: 'app-menu-text' }, "alarms")),
                    react_1.default.createElement("li", { className: 'app-menu-li' },
                        react_1.default.createElement("img", { className: 'formIcon fadeIn', src: '/icons/white/squares.svg' }),
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/stuff", className: 'app-menu-text' }, "organizations")),
                    react_1.default.createElement("li", { className: 'app-menu-li' },
                        react_1.default.createElement("img", { className: 'formIcon fadeIn', src: '/icons/white/graph-bar.svg' }),
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/new-account", className: 'app-menu-text' }, "insights")),
                    react_1.default.createElement("li", { className: 'app-menu-li' },
                        react_1.default.createElement("img", { className: 'formIcon fadeIn', src: '/icons/white/user-fem.svg' }),
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/contact", className: 'app-menu-text' }, "profile")),
                    react_1.default.createElement("li", { className: 'app-menu-li' },
                        react_1.default.createElement("img", { className: 'formIcon fadeIn', src: '/icons/white/mixer.svg' }),
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/new-account", className: 'app-menu-text' }, "settings")),
                    react_1.default.createElement("li", { className: 'app-menu-li', id: 'logout' },
                        react_1.default.createElement("img", { className: 'formIcon fadeIn', src: '/icons/white/back-1.svg' }),
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/new-account", className: 'app-menu-text' }, "logout"))),
                react_1.default.createElement("div", { className: "app-content" },
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/', render: function () { return react_1.default.createElement(react_router_dom_1.Redirect, { to: '/alarms' }); } }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/alarms', component: alarm_clock_1.default }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/stuff', component: spa_stuff_1.default }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/contact', component: spa_contact_1.default }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/new-account', component: spa_new_account_1.default })))));
    };
    return App;
}(react_1.Component));
exports.default = App;
//# sourceMappingURL=spa-main.js.map