console.log("App.js is running");

const movie = {
    title: "Star Wars a New Hpe",
    subtitle: "The best",
};

const template = (
    <div>
        {movie.title && <h1>{movie.title}</h1>}
        {movie.subtitle && <p>{movie.subtitle}</p>}
        {movie.length > 0 ? "Here are yoiur options" : "No Options"}
    </div>
);

const user = {
    name: "Reed",
    age: 38,
    location: "Santaquin",
};

function getLocation(location) {
    if (location) {
        return <p>Location: {user.location}</p>;
    }
}

const myProfile = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
