import React, { useContext, useState } from "react";
import { Range } from "rc-slider";
import RangeContext from "../../context/RangeContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Return from "../Tab/Return";
import OneWay from "../Tab/OneWay";
import "react-tabs/style/react-tabs.css";
import "rc-slider/assets/index.css";
import "./search.css";

function Search() {
  const rangeContext = useContext(RangeContext);
  const [range, setRange] = useState([0, 5000]);

  function handleChange(e) {
    setRange(e);
    rangeContext.toggleOnChange(e);
  }

  return (
    <div className="search">
      <div className="tabs">
        <Tabs>
          <TabList>
            <Tab>One Way</Tab>
            <Tab>Return</Tab>
          </TabList>

          <div className="search-data">
            <TabPanel>
              <OneWay range={range} />
            </TabPanel>
            <TabPanel>
              <Return range={range} />
            </TabPanel>
          </div>
        </Tabs>
      </div>
      <div className="range">
        <h4>Refine flight search</h4>

        <div className="range-data">
          <span className="value">{`${range[0]} To ${range[1]}`}</span>
          <Range
            min={0}
            max={10000}
            onChange={handleChange}
            defaultValue={[0, 5000]}
            marks={{ 0: 0, 5000: 5000, 10000: 10000 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
