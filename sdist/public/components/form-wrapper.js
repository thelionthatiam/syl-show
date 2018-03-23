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
var FormWrapper = /** @class */ (function (_super) {
    __extends(FormWrapper, _super);
    function FormWrapper(props) {
        var _this = _super.call(this, props) || this;
        // CHANGE DATA SENDING TO OBJ RATHER THAN ARRAY
        _this.getData = function (dataFromChild) {
            var data = _this.state.data;
            var title = dataFromChild[0];
            var value = dataFromChild[2];
            data[title] = value;
            _this.setState({
                data: data
            });
            _this.getValidation(dataFromChild);
        };
        _this.state = {
            submitted: false,
            submitable: false,
            data: {}
        };
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.getValidation = _this.getValidation.bind(_this);
        _this.testObj = {};
        return _this;
    }
    FormWrapper.prototype.getValidation = function (arr) {
        for (var k in this.testObj) {
            if (k === arr[0]) {
                console.log(arr[0], 'is already in array');
            }
        }
        var obj = this.testObj;
        obj[arr[0]] = arr[1];
        var bool = this.submitCheck();
        this.setState({
            submitable: bool
        });
    };
    FormWrapper.prototype.submitCheck = function () {
        for (var k in this.testObj) {
            if (this.testObj[k] === false) {
                return false;
            }
        }
        return true;
    };
    FormWrapper.prototype.handleSubmit = function (event) {
        console.log('HANDLE SUBMIT CALLED');
        event.stopPropagation();
        event.preventDefault();
        if (this.state.submitable && this.props.method === 'post') {
            var dummyString = JSON.stringify(this.state.data);
            console.log('test string: ', dummyString);
            fetch(this.props.url, {
                body: dummyString,
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
                .then(function (res) { return res.json(); })
                .then(function (body) { return console.log(body); })
                .then(this.setState({
                submitted: true
            }))
                .catch(function (error) {
                console.log(error.stack);
            });
        }
        else if (this.state.submitable && this.props.method === 'get') {
            fetch(this.props.url, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });
        }
        else {
            console.log('some validation required before sending!');
        }
        this.props.noValidation ? console.log('no validation req') : event.preventDefault();
    };
    FormWrapper.prototype.skipValidation = function () {
        this.setState({
            submitable: true
        });
    };
    FormWrapper.prototype.componentDidMount = function () {
        this.props.noValidation ? this.skipValidation() : console.log('validation required');
    };
    FormWrapper.prototype.render = function () {
        var _this = this;
        var childWithProp = react_1.default.Children.map(this.props.children, function (child) {
            return react_1.default.cloneElement(child, {
                sendData: _this.getData,
                submitted: _this.state.submitted
            });
        });
        return (react_1.default.createElement("div", { className: 'formWrapper' },
            react_1.default.createElement("form", { onSubmit: this.handleSubmit, action: this.props.url, method: this.props.method },
                childWithProp,
                react_1.default.createElement("input", { 
                    // submitable = {this.state.submitable}
                    // submitted = {this.state.submitted}
                    //onClick = {this.handleSubmit}
                    // buttonText = {this.props.buttonText}
                    type: 'submit' }))));
    };
    return FormWrapper;
}(react_1.default.Component));
exports.default = FormWrapper;
//# sourceMappingURL=form-wrapper.js.map