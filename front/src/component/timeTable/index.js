import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import axios from "axios";

import MovieBox from "./MovieBox";
// import timeTableData from "assets/testData/timeTable.json";
import "./style/TimeTable.css";
import "./style/TabMenu.css";

class TimeTable extends Component {
  constructor() {
    super();

    this.state = {
      currentTabIndex: 0,
      dayList: this.createTabList()
    };
  }

  createTabList = () => {
    const dayList = ["월", "화", "수", "목", "금", "토", "일"];
    let today = new Date();
    let data = [];
    for (let i = 0; i < 7; i++) {
      let d = new Date();
      d.setDate(today.getDate() + i);
      let s = {
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
      currentTabIndex: index
    });
  };

  render() {
    return (
      <Tabs className="TimeTable">
        <TabList className="TabMenu">
          {this.state.dayList.map((item, index) => {
            return (
              <Tab
                className={
                  "Item" +
                  (this.state.currentTabIndex !== index ? " deactive" : "")
                }
                selectedClassName="active"
                key={index}
              >
                <div>
                  <span>{item.month}월</span>
                  <span>{item.date}일</span>
                </div>
                <span>{item.day}</span>
              </Tab>
            );
          })}
        </TabList>
        {this.props.timeTableList.map((item, index) => {
          return (
            <TabPanel key={index}>
              <MovieBox
                timeTableData={item}
                reserveData={{
                  day: this.state.dayList[index]
                }}
              />
            </TabPanel>
          );
        })}
      </Tabs>
    );
  }
}

export default TimeTable;
