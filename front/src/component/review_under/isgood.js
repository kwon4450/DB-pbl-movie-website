import React , { Component } from 'react';

class Isgood extends Component{
    render(){
        return(
            <div>
                <div>good: {this.state.number}</div>
                <button onClick = {this.handleIncrease}>+</button>
            </div>
        );
    }
}

export default Isgood;