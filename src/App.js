import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/table";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getdata() {
      let d = await (
        await fetch(
          "https://api.twelvedata.com/time_series?symbol=AAPL&interval=1month&apikey=9e46905b72d74b86a604fe8a972154ee",
          {
            method: "GET",
            headers: {
              "content-type": "application/json",
            },
          }
        )
      ).json();
      d = d["values"].slice(0, 12);
      setData(d);
    }
    getdata();
  }, []);

  return (
    <div className="App">
      <h1>Apple stock price for last 12 months</h1>
      <table>
        <thead>
          <th>
            <div className="row head">
              <p>Month</p>
            </div>
          </th>
          <th>
            <div className="row head">
              <p>Open ($)</p>
            </div>
          </th>
          <th>
            <div className="row head">
              <p>High ($)</p>
            </div>
          </th>
          <th>
            <div className="row head">
              <p>Low ($)</p>
            </div>
          </th>
          <th>
            <div className="row head">
              <p>Close ($)</p>
            </div>
          </th>
          <th>
            <div className="row head">
              <p>Volume</p>
            </div>
          </th>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <Table item={item} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
