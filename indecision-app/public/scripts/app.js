"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAdd = _this.handleAdd.bind(_this);
        _this.state = { options: [] };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);

            alert(this.state.options[randomNum]);
        }
    }, {
        key: "handleAdd",
        value: function handleAdd(option) {
            if (!option) {
                return "Enter valid value to add item.";
            } else if (this.state.options.indexOf(option) > -1) {
                return "This option already exists.";
            }

            this.setState(function (prevState) {
                return { options: prevState.options.concat([option]) };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indecision";
            var subTitle = "Put your life in the hands of a computer";
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subTitle: subTitle }),
                React.createElement(Action, {
                    handlePick: this.handlePick,
                    hasOptions: this.state.options.length > 0
                }),
                React.createElement(Options, {
                    handleDeleteOptions: this.handleDeleteOptions,
                    options: this.state.options
                }),
                React.createElement(AddOption, { handleAdd: this.handleAdd })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(_ref) {
    var title = _ref.title,
        subTitle = _ref.subTitle;

    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            title
        ),
        React.createElement(
            "h2",
            null,
            subTitle
        )
    );
};

var Action = function Action(_ref2) {
    var hasOptions = _ref2.hasOptions,
        handlePick = _ref2.handlePick;

    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { disabled: !hasOptions, onClick: handlePick },
            "What should I do?"
        )
    );
};

var Options = function Options(_ref3) {
    var options = _ref3.options,
        handleDeleteOptions = _ref3.handleDeleteOptions;

    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: handleDeleteOptions },
            "Remove All"
        ),
        options.map(function (option) {
            return React.createElement(Option, { key: option, option: option });
        })
    );
};

var Option = function Option(_ref4) {
    var option = _ref4.option;

    return React.createElement(
        "div",
        null,
        option
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = { error: undefined };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();
            var optionValue = e.target.elements.option.value;
            var error = this.props.handleAdd(optionValue);

            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    { style: { color: "red" } },
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddOption },
                    React.createElement("input", {
                        placeholder: "Enter a option",
                        type: "text",
                        name: "option"
                    }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// const User = ({name, age}) => {
//     return (
//         <div>
//             <p>Name: {name}</p>
//             <p>Age: {age}</p>
//         </div>
//     );
// };

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
