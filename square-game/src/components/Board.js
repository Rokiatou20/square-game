import React from "react";
import Square from "./Square";

class Board extends React.Component {
    // The state contains a boolean to know who is the active player
    // True => First player is active AND False => Second player is active 
    state = {
        isFirstPlayer: true,
        squares: Array(9).fill(null)

    }
    
    handleClick = i => {
        const squares = this.state.squares.slice()

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        
        squares[i] = this.state.isFirstPlayer ? 'X' : 'O'
        this.setState({
            squares: squares,
            isFirstPlayer: !this.state.isFirstPlayer
        })  
        console.log(squares)
    }

    renderSquare(i) {
        return (
            <Square 
                value = {this.state.squares[i]} 
                onClick = {() => this.handleClick(i)} 
            />
        )
    }

    render() {
        let status;
        const winner = calculateWinner(this.state.squares)
        
        if (winner)
            status = "Winner: " + winner 
        else
            status = "Next Player: " + ( this.state.isFirstPlayer ? 'X' : 'O')

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
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

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


export default Board;