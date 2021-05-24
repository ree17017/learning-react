class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subTitle = "Put your life in the hands of a computer";
        const options = ["Thing 1", "Thing 2", "Thing 3"];
        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert("Picked");
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }

    removeAll() {
        console.log(this.props.options);
    }

    render() {
        const options = this.props.options;
        return (
            <div>
                <button onClick={this.removeAll}>Remove All</button>
                {options.map((option) => (
                    <Option key={option} option={option} />
                ))}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.option}
                <button>X</button>
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const optionValue = e.target.elements.option.value;
        if (optionValue) {
            alert(optionValue);
        }
    }

    render() {
        return (
            <div>
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

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
