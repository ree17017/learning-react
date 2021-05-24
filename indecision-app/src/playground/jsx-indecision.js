const app = {
    title: "Star Wars a New Hpe",
    subtitle: "The best",
    options: [],
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderFormApp();
    }
};
const removeOptions = () => {
    app.options = [];
    renderFormApp();
};

const numbers = [55, 101, 100];
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(option);
};

const appRoot = document.getElementById("app");

const renderFormApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button
                disabled={app.options.length == 0}
                onClick={onMakeDecision}
            >
                What Should I do?
            </button>
            <button onClick={removeOptions}>Remove All</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            <p>
                {app.options.length > 0
                    ? "Here are your options"
                    : "No Options"}
            </p>
            <ol>
                {app.options.map((option) => {
                    return <li key={option}>{option}</li>;
                })}
            </ol>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderFormApp();
