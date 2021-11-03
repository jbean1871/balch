// require("dotenv").config();
const AmbientWeatherApi = require("./ambient");

const api = new AmbientWeatherApi({
  apiKey:
    process.env.AMBIENT_WEATHER_API_KEY ||
    "395395f5bab942b3aa29ef114d9bf45c3b75b29269a24f6d98679b45cd4f0e1c",
  applicationKey:
    process.env.AMBIENT_WEATHER_APPLICATION_KEY ||
    "4ee25b49536143b7a44e4af382ffeb4840732c06c4d247febbcd7e2e5b5f3c2a",
});

let balchTemp = [];

// list the user's devices
api.userDevices().then((devices) => {
  devices.forEach((device) => {
    // fetch the most recent data
    api
      .deviceData(device.macAddress, {
        limit: 5,
      })
      .then((deviceData) => {
        console.log(
          "The 5 most recent temperature reports for " +
            device.info.name +
            " - " +
            device.info.location +
            ":"
        );
        deviceData.forEach((data) => {
          console.log(
            data.date + " - " + data.tempf + "°F" + " - " + data.weeklyrainin
          );
          balchTemp.push(data.tempf);
        });
        console.log("---");
      });
  });
});
export { balchTemp };
