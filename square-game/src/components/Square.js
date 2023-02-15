import React from "react";

class Square extends React.Component {

    state = {
        value: ''
    }

    
    
    changeValue = () => {
        console.log(this.props)
        if (this.props.isFirstPlayer) {
            this.setState({value: 'X'})
        }
        else {
            this.setState({value: 'O'})
        }
        this.props.activeSecondPlayerProps()
    }

    render() {
        

        return (
            <button className="square" onClick={this.changeValue}>
                {this.state.value}
            </button>
        );
    }
}

export default Square;
  