"use strict";

console.log("App.js is running");

var movie = {
    title: "Star Wars a New Hpe",
    subtitle: "The best"
};

var template = React.createElement(
    "div",
    null,
    movie.title && React.createElement(
        "h1",
        null,
        movie.title
    ),
    movie.subtitle && React.createElement(
        "p",
        null,
        movie.subtitle
    ),
    movie.length > 0 ? "Here are yoiur options" : "No Options"
);

var user = {
    name: "Reed",
    age: 38,
    location: "Santaquin"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            user.location
        );
    }
}

var myProfile = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
