import React from "react";

function Databar(props) {
  console.log(props.isLoaded);
  if (!props.isLoaded) {
    return <div>Data Loading...</div>;
  } else {
    return (
      <div className="b__data-bar">
        <div className="b__header">
          <div className="b__lake">
            <h1>Balch Lake</h1>
          </div>
          <div className="b__states">
            <p>New Hampshire & Maine</p>
          </div>
        </div>
        <div className="b__data-block">
          <h3>Current Temp</h3>
          <p>{props.data.lastData.tempf}&#x2109;</p>
        </div>
        <div className="b__data-block">
          <h3>Current Water Temp</h3>
          <p>{props.data.lastData.temp2f}&#x2109;</p>
        </div>
      </div>
    );
  }
}

export default Databar;
