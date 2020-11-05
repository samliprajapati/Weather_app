import React, { useEffect, useMemo, useState } from "react";
import backgroundImage from "../Assets/images/weather.jpg";
import { Input, Select } from "antd";
import "./Weather.css";
import axios from "axios";
import Papa from "papaparse";
import moment from "moment";

const { Option } = Select;
function Weather() {
  const [city, setCity] = useState("Raurkela");
  const [state, setState] = useState([]);
  const [weather, setWeather] = useState({});

  React.useEffect(() => {
    Papa.parse("/state.csv", {
      download: true,
      complete: (data) => {
        setState(data.data);
      },
    });
  }, []);

  var stateName = state
    .filter((item, i) => i !== 0 && i !== 1)
    .map(function (x) {
      return {
        State: x[0],
      };
    });

  useEffect(() => {
    axios
      .get(`https://rapidapi.p.rapidapi.com/forecast.json?q=${city}`, {
        headers: {
          "x-rapidapi-key":
            "ed5c9c467bmsh27c4590fb0a654dp1f1c06jsn314675f26c2a",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      })
      .then((res) => {
        console.log(res.data.current);
        setWeather(res.data.current);
      })
      .catch((err) => console.log(err));
  }, [city]);
  function handleChange(value) {
    debugger;
    setCity(value);
  }
  console.log(weather);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="navbar">
          {" "}
          <Select
            showSearch
            style={{ width: 200 }}
            optionFilterProp="children"
            onSelect={handleChange}
            defaultValue={"Raurkela"}
          >
            {stateName.map((item) => {
              return <Option value={item.State}>{item.State}</Option>;
            })}
          </Select>
        </div>
        {/* FirstBox */}
        <div className="firstBox">
          <div>{moment().format("LL")}</div>
          <div>
            <span> {city}</span>
          </div>
        </div>
        {/* FirstBox End */}
        <div className="secondBox">
          <div className="subBox">
            <div className="degree">
              {weather.temp_c}&deg;c
              <div className="subdegree">
                FEEL LIKE {weather.feelslike_c || 0}&deg;c
              </div>
            </div>

            <div className="weatherBox">
              <i class="fas fa-cloud-rain" style={{ marginTop: "5px" }}></i>
              &nbsp;
              <div>
                Rain
                <div className="subweather">40%</div>
              </div>
            </div>
            <div className="vl"></div>
            <div className="weatherBox">
              <i class="fas fa-wind" style={{ marginTop: "5px" }}></i>
              &nbsp;
              <div>
                Wind
                <div className="subweather">{weather.wind_kph || 0}KM/Hr</div>
              </div>
            </div>
            <div className="vl"></div>
            <div className="weatherBox">
              <i
                class="fas fa-temperature-high"
                style={{ marginTop: "5px" }}
              ></i>
              &nbsp;
              <div>
                Humidity
                <div className="subweather">{weather.humidity || 0}</div>
              </div>
            </div>
            <div className="vl"></div>
            <div className="weatherBox">
              <i class="fas fa-sun" style={{ marginTop: "5px" }}></i>
              &nbsp;
              <div>
                UV index
                <div className="subweather">{weather.uv || 0} out of 10</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Weather;
