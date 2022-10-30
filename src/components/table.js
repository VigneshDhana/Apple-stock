import React from "react";

function Table({ item }) {
  let { datetime, high, low, open, close, volume } = { ...item };
  datetime = datetime.slice(0, 7);
  return (
    <tr>
      <td>
        <div className="row body">
          <p>{datetime}</p>
        </div>
      </td>
      <td>
        <div className="row body">
          <p>{parseFloat(open)}</p>
        </div>
      </td>
      <td>
        <div className="row body">
          <p>{parseFloat(high)}</p>
        </div>
      </td>
      <td>
        <div className="row body">
          <p>{parseFloat(low)}</p>
        </div>
      </td>
      <td>
        <div className="row body">
          <p>{parseFloat(close)}</p>
        </div>
      </td>
      <td>
        <div className="row body">
          <p>{parseInt(volume)}</p>
        </div>
      </td>
    </tr>
  );
}

export default Table;
