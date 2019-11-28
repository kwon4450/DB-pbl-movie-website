import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

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
        <div className="selector">
          <Tabs
            selectedIndex={this.state.tabIndex}
            onSelect={tabIndex => this.handleState(tabIndex)}
          >
            <TabList>
              {Object.keys(theaterData).map((region, index) => (
                <Tab key={index}>{region}</Tab>
              ))}
            </TabList>

            {Object.keys(theaterData).map((region, index) => (
              <TabPanel key={index}>
                {theaterData[region].map((theater, jndex) => (
                  <div
                    className="item"
                    key={jndex}
                    onClick={() => this.props.handleTheater(region, theater)}
                  >
                    {theater}
                  </div>
                ))}
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    );
  }
}

export default TheaterSelector;
