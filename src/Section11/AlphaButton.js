import React, {Component} from "react";

class AlphaButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.guess(this.props.letter);
    }

    render() {
        let {ltr} = this.props.letter;
        return <button
        className="AlphaButton"
        value={ltr}
        key={`button-${ltr}`}
        onClick={this.handleClick}
        disabled={this.props.disabled}>
          {this.props.letter}
      </button>
    }
}

export default AlphaButton;