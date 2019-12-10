import React, { Component } from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import MovieBox from "./MovieBox";
import "./style/TimeTable.css";
import "./style/TabMenu.css";

class TimeTable extends Component {
  constructor() {
    super();

    this.state = {
      tabIndex: 0,
      dayList: this.createTabList(),
      timeTableList: [null, null, null, null, null, null, null]
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedTheater !== null) {
      this.getTimeTable(nextProps.selectedTheater, this.state.tabIndex);
    }
  }

  createTabList = () => {
    const dayList = ["일", "월", "화", "수", "목", "금", "토"];
    let today = new Date();
    let data = [];
    for (let i = 0; i < 7; i++) {
      let d = new Date();
      d.setDate(today.getDate() + i);
      let s = {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        date: d.getDate(),
        day: dayList[d.getDay()]
      };
      data.push(s);
    }
    return data;
  };

  selectTab = index => {
    this.setState({
      tabIndex: index
    });
    this.getTimeTable(this.props.selectedTheater, index);
  };

  getTimeTable(selectedTheater, index) {
    this.setState({
      timeTableList: this.state.timeTableList.map((item, i) => {
        if (i === index) return null;
        else return item;
      })
    });

    let curDate = this.state.dayList[index];
    axios
      .get(
        `/api/theaters/timetable?theatercode=${selectedTheater.theatercode}&date=${curDate.year}-${curDate.month}-${curDate.date}`
      )
      .then(res => {
        this.setState({
          timeTableList: this.state.timeTableList.map((item, i) => {
            if (i === index) return res.data;
            else return item;
          })
        });
      })
      .catch(err => {
        this.setState({
          timeTableList: this.state.timeTableList.map((item, i) => {
            if (i === index) return undefined;
            else return item;
          })
        });
        console.log(err, "get timeTable data err");
      });
  }

  render() {
    return (
      <Tabs
        className="TimeTable"
        selectedTabClassName="active"
        selectedIndex={this.state.tabIndex}
        onSelect={tabIndex => this.selectTab(tabIndex)}
      >
        <TabList className="TabMenu">
          {this.state.dayList.map((item, index) => {
            return (
              <Tab className="Item" key={index}>
                <div>
                  <span>{item.month}월</span>
                  <span>{item.date}일</span>
                </div>
                <span>{item.day}</span>
              </Tab>
            );
          })}
        </TabList>
        {this.state.timeTableList.map((item, index) => {
          let jsx;
          if (item === null) {
            jsx = <h2>Loading...</h2>;
          } else if (typeof item === "object" && item.length !== 0) {
            jsx = (
              <MovieBox
                timeTableData={item}
                reserveData={{
                  day: this.state.dayList[index]
                }}
              />
            );
          } else {
            jsx = <h2>Fail to loading timeTables :(</h2>;
          }
          return <TabPanel key={index}>{jsx}</TabPanel>;
        })}
      </Tabs>
    );
  }
}

export default TimeTable;
