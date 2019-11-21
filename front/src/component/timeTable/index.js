import React, { Component } from 'react';

import MovieBox from './MovieBox';

class TimeTable extends Component{
  timeTableData = [
    [
      {
        name: "Frozen",
        isOn: true,
        genre: "애니매이션",
        runningTime: 103,
        releaseDate: "2019.11.21",
        screenInfo: [
          {
            type: '2D',
            location: {
              id: '1',
              floor: '6'
            },
            totalSeat: '158',
            timeTable: [
              {
                time: '16:30',
                seat: '65'
              },
              {
                time: '18:30',
                seat: '100'
              },
              {
                time: '20:30',
                seat: '140'
              }
            ]
          },
          {
            type: '3D',
            location: {
              id: '2',
              floor: '6'
            },
            totalSeat: '145',
            timeTable: [
              {
                time: '13:30',
                seat: '15'
              },
              {
                time: '15:45',
                seat: '40'
              },
              {
                time: '16:50',
                seat: '65'
              }
            ]
          },
        ]
      },
      {
        name: "나쁜음모",
        isOn: true,
        genre: "대충",
        runningTime: 103,
        releaseDate: "2019.11.21",
        screenInfo: [
          {
            type: '2D',
            location: {
              id: '3',
              floor: '6'
            },
            totalSeat: '158',
            timeTable: [
              {
                time: '16:30',
                seat: '65'
              },
              {
                time: '18:30',
                seat: '100'
              },
              {
                time: '20:30',
                seat: '140'
              }
            ]
          },
          {
            type: '3D',
            location: {
              id: '4',
              floor: '6'
            },
            totalSeat: '145',
            timeTable: [
              {
                time: '13:30',
                seat: '15'
              },
              {
                time: '15:45',
                seat: '40'
              },
              {
                time: '16:50',
                seat: '65'
              }
            ]
          },
        ]
      }
    ],
    [
      {
        name: "Frozen",
        isOn: true,
        genre: "애니매이션",
        runningTime: 103,
        releaseDate: "2019.11.21",
        screenInfo: [
          {
            type: '2D',
            location: {
              id: '1',
              floor: '6'
            },
            totalSeat: '158',
            timeTable: [
              {
                time: '16:30',
                seat: '62'
              },
              {
                time: '18:30',
                seat: '120'
              },
              {
                time: '20:30',
                seat: '150'
              }
            ]
          },
          {
            type: '3D',
            location: {
              id: '2',
              floor: '6'
            },
            totalSeat: '145',
            timeTable: [
              {
                time: '13:30',
                seat: '35'
              },
              {
                time: '15:45',
                seat: '65'
              },
              {
                time: '16:50',
                seat: '115'
              }
            ]
          },
        ]
      },
      {
        name: "나쁜음모",
        isOn: true,
        genre: "대충",
        runningTime: 103,
        releaseDate: "2019.11.21",
        screenInfo: [
          {
            type: '2D',
            location: {
              id: '3',
              floor: '6'
            },
            totalSeat: '158',
            timeTable: [
              {
                time: '16:30',
                seat: '69'
              },
              {
                time: '18:30',
                seat: '130'
              },
              {
                time: '20:30',
                seat: '150'
              }
            ]
          },
          {
            type: '3D',
            location: {
              id: '4',
              floor: '6'
            },
            totalSeat: '145',
            timeTable: [
              {
                time: '13:30',
                seat: '40'
              },
              {
                time: '15:45',
                seat: '69'
              },
              {
                time: '16:50',
                seat: '95'
              }
            ]
          },
        ]
      }
    ]
  ]
  tabList = []

  state = {
    currentTabIndex: 0
  }

  createTabList = () => {
    const dayList = ["월", "화", "수", "목", "금", "토", "일"];
    let today = new Date();
    let data = [];
    for (let i = 0; i < 7; i++) {
      let d = new Date();
      d.setDate(today.getDate()+i);
      let s = {
        month: d.getMonth(),
        date: d.getDate(),
        day: dayList[d.getDay()]
      }
      data.push(s);
    }
    this.tabList = data;
  }

  selectTab = (index) => {
    console.log("selected tab is ", index);
    this.setState({
      currentTabIndex: index
    });
  }

  render() {

    this.createTabList();

    return (
    <div className='TimeTable'>
      <div className='TabMenu'>
        {this.tabList.map((item, index) => {
          return (
            <div className={'Item'+(this.state.currentTabIndex!==index?' deactive':'')}
            key={index}
            onClick={()=>{this.selectTab(index)}}>
              <span>{item.month}월</span>
              <span>{item.date}일</span>
              <span>{item.day}</span>
            </div>
          );
        })}
      </div>

      <div className="TabContents">
        {this.timeTableData.map((item, index) => {
          return(
            <MovieBox timeTableData={item}
            isActive={this.state.currentTabIndex===index}
            key={index}></MovieBox>
          );
        })}
      </div>
    </div>
    );
  }
}

export default TimeTable;