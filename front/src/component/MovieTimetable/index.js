import React , { Component } from 'react';
import theaterData from 'assets/testData/theater.json';
import TheaterName from 'component/MovieTimetable/TheaterName.js';

class TheaterInfo extends Component{
    render(){
        return(
            <div classname = 'MovieTimetable'>
                <h2>극장별 상영시간표</h2>
                <div class = 'city'>
                    <TheaterName></TheaterName>
                </div>
            </div>
        );
    }
}

export default TheaterInfo;