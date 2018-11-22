import React from "react";

class Key extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleClick, allClear } = this.props;
    return (
      <div className="keys">
        <div className="row0">
          <div className="key" onClick={() => allClear()}>
            AC
          </div>
          <div className="key" onClick={() => handleClick("+/-")}>
            +/-
          </div>
        </div>
        <div className="row1">
          <div className="key" onClick={() => handleClick("7")}>
            7
          </div>
          <div className="key" onClick={() => handleClick("8")}>
            8
          </div>
          <div className="key" onClick={() => handleClick("9")}>
            9
          </div>
        </div>
        <div className="row2">
          <div className="key" onClick={() => handleClick("4")}>
            4
          </div>
          <div className="key" onClick={() => handleClick("5")}>
            5
          </div>
          <div className="key" onClick={() => handleClick("6")}>
            6
          </div>
        </div>
        <div className="row3">
          <div className="key" onClick={() => handleClick("1")}>
            1
          </div>
          <div className="key" onClick={() => handleClick("2")}>
            2
          </div>
          <div className="key" onClick={() => handleClick("3")}>
            3
          </div>
        </div>
        <div className="row4">
          <div className="key" onClick={() => handleClick("0")}>
            0
          </div>
          <div className="key" onClick={() => handleClick(".")}>
            .
          </div>
        </div>
      </div>
    );
  }
}

export default Key;
