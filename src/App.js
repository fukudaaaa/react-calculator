import React from "react";
import { BigNumber } from "bignumber.js";

import Symbol from "./components/Symbol";
import Key from "./components/Key";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      symbolArray: ["x", "+", "-", "=", "÷"],
      display: "0",
      num1: "",
      num2: "",
      sym: ""
    };
  }

  render() {
    return (
      <div className="App">
        <div className="formura">
          {this.state.num1} {this.state.sym} {this.state.num2}
        </div>
        <div className="display">
          <p>{this.state.display}</p>
        </div>
        <div className="down-side">
          <Key handleClick={this.handleClick} allClear={this.allClear} />
          <Symbol handleClick={this.handleClick} calc={this.calc} />
        </div>
      </div>
    );
  }

  handleClick = item => {
    const { display, num1, num2, sym, symbolArray } = this.state;
    let A;
    if (symbolArray.indexOf(item) < 0 && item !== "+/-") {
      this.clickNum(item);
    } else if (symbolArray.indexOf(item) >= 0) {
      this.clickSymbol(item);
    } else if (item === "=" && num1 && num2 && sym) {
      this.calc();
    }
    // +/- で　正負を変える
    else if (item === "+/-") {
      if (!sym && !num2) {
        if (Number(num1) > 0) {
          A = "-" + num1;
          this.setState({ display: A, num1: A });
        } else if (Number(num1) < 0) {
          A = Math.abs(Number(num1)).toString();
          this.setState({ display: A, num1: A });
        } else if (display !== "0" && !num1 && !num2 && !sym) {
          if (Number(display) > 0) {
            A = "-" + display;
            this.setState({ display: A, num1: A });
          } else if (Number(display) < 0) {
            A = Math.abs(Number(display)).toString();
            this.setState({ display: A, num1: A });
          }
        }
      }
      if ((num1 && sym) || num1 === 0) {
        if (Number(num2) > 0) {
          A = "-" + num2;
          this.setState({ display: A, num2: A });
        } else {
          A = Math.abs(Number(num2)).toString();
          this.setState({ display: A, num2: A });
        }
      }
    }
  };

  clickNum = item => {
    const { display, num1, num2, sym } = this.state;
    let A = "";
    //for num1
    if (!sym && !num2) {
      if (item === "0") {
        if (display !== "0") {
          A = "0";
          this.setState({ display: A, num1: A });
        } else if (display === "0" && !num1) {
          A = "0";
          this.setState({ display: A, num1: A });
        } else if (display === "0") {
          return;
        } else {
          A = num1 + item;
          this.setState({ display: A, num1: A });
        }
      }
      if (item === ".") {
        if (!num1) {
          A = "0.";
          this.setState({ display: A, num1: A });
        }
        if (num1 && num1.indexOf(".") < 0) {
          A = num1 + item;
          this.setState({ display: A, num1: A });
        }
      } else {
        if (num1 === "0") {
          return;
        }
        A = num1 + item;
        this.setState({ display: A, num1: A });
      }
    }
    //for num2
    if ((num1 && sym) || num1 === 0) {
      if (item === "0") {
        if (display !== "0") {
          A = "0";
          this.setState({ display: A, num2: A });
        } else if (display === "0" && !num2) {
          A = "0";
          this.setState({ display: A, num2: A });
        } else if (display === "0") {
          return;
        } else {
          A = num2 + item;
          this.setState({ display: A, num2: A });
        }
      }
      if (item === ".") {
        if (!num2) {
          A = "0.";
          this.setState({ display: A, num2: A });
        }
        if (num2 && num2.indexOf(".") < 0) {
          A = num2 + item;
          this.setState({ display: A, num2: A });
        }
      } else {
        if (num2 === "0") {
          return;
        }
        A = num2 + item;
        this.setState({ display: A, num2: A });
      }
    }
  };

  clickSymbol = item => {
    const { display, num1, num2, sym } = this.state;
    let A;
    if (num1) {
      this.setState({
        sym: item
      });
    }
    if (num1 && sym && num2) {
      this.calc();
    } else {
      A = display;
      this.setState({ num1: A, sym: item });
    }
  };

  allClear = () => {
    this.setState({
      display: "0",
      num1: "",
      num2: "",
      sym: ""
    });
  };

  calc = () => {
    const { num1, num2, sym } = this.state;
    const A = Number(num1);
    const B = Number(num2);
    let X;
    if (sym === "+") {
      X = new BigNumber(A).plus(B).toString();
      this.setState({ display: X, num1: "", num2: "", sym: "" });
    }
    if (sym === "-") {
      X = new BigNumber(A).minus(B).toNumber();
      this.setState({ display: X, num1: "", num2: "", sym: "" });
    }
    if (sym === "x") {
      X = new BigNumber(A).multipliedBy(B).toNumber();
      this.setState({ display: X, num1: "", num2: "", sym: "" });
    }
    if (sym === "÷") {
      if (!num2) {
        X = "0";
        this.setState({ display: X, num1: "", num2: "", sym: "" });
      } else {
        X = new BigNumber(A)
          .dividedBy(B)
          .toString()
          .split("")
          .splice(0, 10)
          .join("");
        this.setState({ display: X, num1: "", num2: "", sym: "" });
      }
    }
  };
}

export default App;
