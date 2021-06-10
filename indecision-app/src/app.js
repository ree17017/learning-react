class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = { options: props.options };
    }

    componentDidMount() {
        console.log("component did mount");
    }

    componentDidUpdate(prevProp, prevState) {
        console.log("update");
    }

    componentWillUnmount() {
        console.log("unmount");
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handlePick() {
        const randomNum = Math.floor(
            Math.random() * this.state.options.length
        );

        alert(this.state.options[randomNum]);
    }

    handleAdd(option) {
        if (!option) {
            return "Enter valid value to add item.";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists.";
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option]),
        }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter(
                (option) => optionToRemove !== option
            ),
        }));
    }

    render() {
        const title = "Indecision";
        const subTitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subTitle={subTitle} />
                <Action
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAdd={this.handleAdd} />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: [],
};

const Header = ({ title, subTitle }) => {
    return (
        <div>
            <h1>{title}</h1>
            {subTitle && <h2>{subTitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: "Indecision",
};

const Action = ({ hasOptions, handlePick }) => {
    return (
        <div>
            <button disabled={!hasOptions} onClick={handlePick}>
                What should I do?
            </button>
        </div>
    );
};

const Options = ({ options, handleDeleteOptions, handleDeleteOption }) => {
    return (
        <div>
            <button onClick={handleDeleteOptions}>Remove All</button>
            {options.map((option) => (
                <Option
                    handleDeleteOption={handleDeleteOption}
                    key={option}
                    option={option}
                />
            ))}
        </div>
    );
};

const Option = ({ option, handleDeleteOption }) => {
    return (
        <div>
            {option}
            <button onClick={(e) => handleDeleteOption(option)}>Remove</button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = { error: undefined };
    }

    handleAddOption(e) {
        e.preventDefault();
        const optionValue = e.target.elements.option.value;
        const error = this.props.handleAdd(optionValue);

        this.setState(() => ({ error }));
    }

    render() {
        return (
            <div>
                {this.state.error && (
                    <p style={{ color: "red" }}>{this.state.error}</p>
                )}
                <form onSubmit={this.handleAddOption}>
                    <input
                        placeholder="Enter a option"
                        type="text"
                        name="option"
                    />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// const User = ({name, age}) => {
//     return (
//         <div>
//             <p>Name: {name}</p>
//             <p>Age: {age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
