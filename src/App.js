import "./App.css";
import Profile from "./Components/Profile";
import Activity from "./Components/Activity";
import React, { useState } from "react";

function App() {
  const [selected, setSelected] = useState(1);
  const [data, setData] = useState({
    period: "Week",
    time: ["32", "10", "4", "4", "5", "2"],
    prev: ["36", "8", "7", "5", "10", "2"],
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
        time: ["32", "10", "4", "4", "5", "2"],
        prev: ["36", "8", "7", "5", "10", "2"],
      };
    } else if (v === 2) {
      dataset = {
        period: "Month",
        time: ["120", "33", "55", "12", "23", "55"],
        prev: ["110", "31", "51", "11", "11", "1"],
      };
    } else if (v === 0) {
      dataset = {
        period: "Day",
        time: ["12", "3", "5", "1", "2", "5"],
        prev: ["11", "3", "5", "1", "1", "1"],
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
