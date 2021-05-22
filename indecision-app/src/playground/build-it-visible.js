var showDetails = false;

const onShowDetails = () => {
    showDetails = !showDetails;
    render();
};

const appRoot = document.getElementById("app");

const render = () => {
    const templateTwo = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onShowDetails} id="id">
                {showDetails ? "Hide Details" : "Show Details"}
            </button>
            {showDetails && (
                <p>Hey, These are some details you can now see!</p>
            )}
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

render();
