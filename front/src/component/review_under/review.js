import React , { Component } from 'react';
import Isgood from './isgood';

class Review extends Component{
    render(){
        return(
            <div classname = 'Review'>
                <div classname = 'nickname'>{this.props.nickname}</div>
                <div classname = 'reviews'>{this.props.reviews}</div>
                <br></br><br></br>
                <div classname = 'grade'>{this.props.grade >= normal ? 1 : 0}</div>
                <div classname = 'date'>{this.props.date.year}.{this.props.date.month}.{this.props.date.day}</div> // 이걸 쪼개야 하나?
                <Isgood></Isgood>
            </div>
        );
    }
}

export default Review;