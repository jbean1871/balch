import bkg from "./images/balch_lake.jpg";
import "./App.css";
import DataBar from "./components/DataBar.js";
import React from "react";
const AmbientWeatherApi = require("./data/ambient");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { balchData: null, isLoaded: false };
  }

  componentDidMount() {
    const api = new AmbientWeatherApi({
      apiKey:
        process.env.AMBIENT_WEATHER_API_KEY ||
        "395395f5bab942b3aa29ef114d9bf45c3b75b29269a24f6d98679b45cd4f0e1c",
      applicationKey:
        process.env.AMBIENT_WEATHER_APPLICATION_KEY ||
        "4ee25b49536143b7a44e4af382ffeb4840732c06c4d247febbcd7e2e5b5f3c2a",
    });
    api.userDevices().then((devices) => {
      const balchData = devices[0];
      this.setState({ balchData: balchData, isLoaded: true });
    });
  }
  render() {
    let { isLoaded, balchData } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <div className="b__container">
            <DataBar data={balchData} isLoaded={isLoaded} />
          </div>
        </div>
      );
    }
  }
}

export default App;
