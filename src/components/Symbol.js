import React from "react";

class Symbol extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleClick, calc } = this.props;
    return (
      <div className="symbols">
        <div className="symbol" onClick={() => handleClick("÷")}>
          ÷
        </div>
        <div className="symbol" onClick={() => handleClick("x")}>
          x
        </div>
        <div className="symbol" onClick={() => handleClick("+")}>
          +
        </div>
        <div className="symbol" onClick={() => handleClick("-")}>
          -
        </div>
        <div className="symbol" onClick={() => calc()}>
          =
        </div>
      </div>
    );
  }
}

export default Symbol;
