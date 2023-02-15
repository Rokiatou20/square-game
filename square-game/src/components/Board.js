import React from "react";
import Square from "./Square";

class Board extends React.Component {
    // The state contains a boolean to know who is the active player
    // True => First player is active AND False => Second player is active 
    state = {
        isFirstPlayer: true
    }
    
    // Function to active next player
    activeSecondPlayer = () => this.setState({isFirstPlayer: !this.state.isFirstPlayer})

    renderSquare() {
        return <Square isFirstPlayer={this.state.isFirstPlayer} activeSecondPlayerProps={this.activeSecondPlayer}/>;
    }

    render() {
        const status = 'Next player: X';

        return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {this.renderSquare()}
                {this.renderSquare()}
                {this.renderSquare()}
            </div>
            <div className="board-row">
                {this.renderSquare()}
                {this.renderSquare()}
                {this.renderSquare()}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
        );
    }
}
export default Board;