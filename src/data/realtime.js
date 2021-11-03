// require("dotenv").config();
const AmbientWeatherApi = require("./ambient");

// helper function
function getName(device) {
  return device.info.name;
}

const apiKey =
  process.env.AMBIENT_WEATHER_API_KEY ||
  "395395f5bab942b3aa29ef114d9bf45c3b75b29269a24f6d98679b45cd4f0e1c";
const api = new AmbientWeatherApi({
  apiKey,
  applicationKey:
    process.env.AMBIENT_WEATHER_APPLICATION_KEY ||
    "4ee25b49536143b7a44e4af382ffeb4840732c06c4d247febbcd7e2e5b5f3c2a",
});

api.connect();
api.on("connect", () =>
  console.log("Connected to Ambient Weather Realtime API!")
);

api.on("subscribed", (data) => {
  console.log("Subscribed to " + data.devices.length + " device(s): ");
  console.log(data.devices.map(getName).join(", "));
});
api.on("data", (data) => {
  console.log(
    data.date +
      " - " +
      getName(data.device) +
      " current outdoor temperature is: " +
      data.tempf +
      "°F"
  );
  console.log("----------");
  console.log(data);
});
api.subscribe(apiKey);
