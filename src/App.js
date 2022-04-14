import "./App.css";
import Profile from "./Components/Profile";
import Activity from "./Components/Activity";
import React, { useState } from "react";

import jsondata from "./data.json";

function App() {
  const [selected, setSelected] = useState(1);
  console.log(jsondata[0].timeframes["weekly"].current);
  const [data, setData] = useState({
    period: "Week",
    time: [
      jsondata[0].timeframes["weekly"].current,
      jsondata[1].timeframes["weekly"].current,
      jsondata[2].timeframes["weekly"].current,
      jsondata[3].timeframes["weekly"].current,
      jsondata[4].timeframes["weekly"].current,
      jsondata[5].timeframes["weekly"].current,
    ],
    prev: [
      jsondata[0].timeframes["weekly"].previous,
      jsondata[1].timeframes["weekly"].previous,
      jsondata[2].timeframes["weekly"].previous,
      jsondata[3].timeframes["weekly"].previous,
      jsondata[4].timeframes["weekly"].previous,
      jsondata[5].timeframes["weekly"].previous,
    ],
  });

  const set = (v) => {
    setSelected(v);
    activeData(v);
  };

  const activeData = (v) => {
    var dataset = {};
    if (v === 1) {
      dataset = {
        period: "Week",
        time: [
          jsondata[0].timeframes["weekly"].current,
          jsondata[1].timeframes["weekly"].current,
          jsondata[2].timeframes["weekly"].current,
          jsondata[3].timeframes["weekly"].current,
          jsondata[4].timeframes["weekly"].current,
          jsondata[5].timeframes["weekly"].current,
        ],
        prev: [
          jsondata[0].timeframes["weekly"].previous,
          jsondata[1].timeframes["weekly"].previous,
          jsondata[2].timeframes["weekly"].previous,
          jsondata[3].timeframes["weekly"].previous,
          jsondata[4].timeframes["weekly"].previous,
          jsondata[5].timeframes["weekly"].previous,
        ],
      };
    } else if (v === 2) {
      dataset = {
        period: "Month",
        time: [
          jsondata[0].timeframes["monthly"].current,
          jsondata[1].timeframes["monthly"].current,
          jsondata[2].timeframes["monthly"].current,
          jsondata[3].timeframes["monthly"].current,
          jsondata[4].timeframes["monthly"].current,
          jsondata[5].timeframes["monthly"].current,
        ],
        prev: [
          jsondata[0].timeframes["monthly"].previous,
          jsondata[1].timeframes["monthly"].previous,
          jsondata[2].timeframes["monthly"].previous,
          jsondata[3].timeframes["monthly"].previous,
          jsondata[4].timeframes["monthly"].previous,
          jsondata[5].timeframes["monthly"].previous,
        ],
      };
    } else if (v === 0) {
      dataset = {
        period: "Day",
        time: [
          jsondata[0].timeframes["daily"].current,
          jsondata[1].timeframes["daily"].current,
          jsondata[2].timeframes["daily"].current,
          jsondata[3].timeframes["daily"].current,
          jsondata[4].timeframes["daily"].current,
          jsondata[5].timeframes["daily"].current,
        ],
        prev: [
          jsondata[0].timeframes["daily"].previous,
          jsondata[1].timeframes["daily"].previous,
          jsondata[2].timeframes["daily"].previous,
          jsondata[3].timeframes["daily"].previous,
          jsondata[4].timeframes["daily"].previous,
          jsondata[5].timeframes["daily"].previous,
        ],
      };
    } else {
      dataset = {
        period: "Unknown",
        time: ["0", "0", "0", "0", "0", "0"],
        prev: ["0", "0", "0", "0", "0", "0"],
      };
    }

    setData(dataset);
  };

  return (
    <div className="flex bg-very-dark-blue min-w-screen min-h-screen items-center justify-center flex-col sm:flex-row sm:px-24 sm:py-40">
      <Profile
        First="Jeremy"
        Last="Robson"
        selected={selected}
        setSelected={set}
      />
      <Activity data={data} />
    </div>
  );
}

export default App;
