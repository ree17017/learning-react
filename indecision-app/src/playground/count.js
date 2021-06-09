class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = { count: 0 };
    }

    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            };
        });
    }
    minusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
            };
        });
    }
    reset() {
        this.setState(() => {
            return {
                count: 0,
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}
ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCountApp();
// };

// const subtractOne = () => {
//     console.log("SubtractOne");
//     count--;
//     renderCountApp();
// };
// const reset = () => {
//     console.log("Rest");
//     count = 0;
//     renderCountApp();
// };

// const renderCountApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne} id="id">
//                 +1
//             </button>
//             <button onClick={subtractOne} id="subtract-one">
//                 -1
//             </button>
//             <button onClick={reset} id="reset">
//                 Rest
//             </button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCountApp();
