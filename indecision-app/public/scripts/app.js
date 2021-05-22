"use strict";

var app = {
    title: "Star Wars a New Hpe",
    subtitle: "The best",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderFormApp();
    }
};
var removeOptions = function removeOptions() {
    app.options = [];
    renderFormApp();
};

var numbers = [55, 101, 100];
var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    console.log(option);
};

var appRoot = document.getElementById("app");

var renderFormApp = function renderFormApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "button",
            {
                disabled: app.options.length == 0,
                onClick: onMakeDecision
            },
            "What Should I do?"
        ),
        React.createElement(
            "button",
            { onClick: removeOptions },
            "Remove All"
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "Here are your options" : "No Options"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        )
    );
    ReactDOM.render(template, appRoot);
};

renderFormApp();
