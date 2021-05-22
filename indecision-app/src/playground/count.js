let count = 0;
const addOne = () => {
    count++;
    renderCountApp();
};

const subtractOne = () => {
    console.log("SubtractOne");
    count--;
    renderCountApp();
};
const reset = () => {
    console.log("Rest");
    count = 0;
    renderCountApp();
};

const renderCountApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} id="id">
                +1
            </button>
            <button onClick={subtractOne} id="subtract-one">
                -1
            </button>
            <button onClick={reset} id="reset">
                Rest
            </button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCountApp();
