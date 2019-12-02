import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./style/selector.css";

import theaterData from "assets/testData/TheaterName.json";
let favorateTheater = [
  { name: "DBV안산", region: "경기" },
  { name: "DBV강남", region: "서울" }
];

class TheaterSelector extends Component {
  static defaultProps = {
    handleTheater: (region, theater) => console.log(region, theater)
  };
  state = {
    tabIndex: 0
  };

  handleState = index => {
    this.setState({
      tabIndex: index
    });
  };

  render() {
    return (
      <div className="TheaterSelector">
        <div className="favorite">
          {favorateTheater.map((item, index) => (
            <div
              className="item"
              key={index}
              onClick={() =>
                this.handleState(Object.keys(theaterData).indexOf(item.region))
              }
            >
              {item.name}
            </div>
          ))}
        </div>
        <Tabs
          className="selector"
          selectedTabClassName="selected"
          selectedIndex={this.state.tabIndex}
          onSelect={tabIndex => this.handleState(tabIndex)}
        >
          <TabList className="flex-container">
            {Object.keys(theaterData).map((region, index) => (
              <Tab key={index}>{region}</Tab>
            ))}
          </TabList>
          <div className="flex-container2">
            {Object.keys(theaterData).map((region, index) => (
              <TabPanel className="theaters" key={index}>
                <ul>
                  {theaterData[region].map((theater, jndex) => (
                    <li key={jndex}>
                      <div
                        className="item"
                        onClick={() =>
                          this.props.handleTheater(region, theater)
                        }
                      >
                        {theater}
                      </div>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    );
  }
}

export default TheaterSelector;
