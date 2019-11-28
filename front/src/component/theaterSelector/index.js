import React , { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import theaterData from 'assets/testData/TheaterName.json';

class TheaterSelector extends Component{
  render(){
    return(
      <div classname='TheaterSelector'>
        <div className='favorite'>

        </div>
        <div className='selector'>
          <Tabs>
            <TabList>
              {Object.keys(theaterData).map((item, index) => (
                <Tab key={index}>{item}</Tab>
              ))}
            </TabList>
            
            {Object.values(theaterData).map((item, index) => (
              <TabPanel key={item}></TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    );
  }
}

export default TheaterSelector;