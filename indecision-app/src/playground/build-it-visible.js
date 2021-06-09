class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        const showDetails = false;
        this.state = { showDetails: false };
        this.onShowDetails = this.onShowDetails.bind(this);
    }

    onShowDetails() {
this.setState((prevState) => {
    return showDetails: !prevState.showDetails
})
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.onShowDetails} id="id">
                    {this.showDetails ? "Hide Details" : "Show Details"}
                </button>
                {this.showDetails && (
                    <p>Hey, These are some details you can now see!</p>
                )}
            </div>
        );
    }
}
const appRoot = document.getElementById("app");
ReactDOM.render(<VisibilityToggle />, appRoot);
