import React , { Component } from 'react';

class TheaterInfo extends Component{
    render(){
        return(
            <div classname = "TheaterInfo">
                <h1>THEATER</h1>
                <div class = 'TheaterLocation'>
                    <h2>CGV{this.props.names}</h2>
                    <div class = 'DetailLocation'>{this.props.Location}</div>
                    <br></br>
                    <div class = 'Tellnum'>{this.props.Tellnum}</div>
                    <div class = 'TotalScreen'>{this.props.Totalscreen}관 / {this.props.Totalseat}석</div>
                    /* 현재 데이터 없음 */
                </div>
            </div>
        );
    }
}

export default TheaterInfo;