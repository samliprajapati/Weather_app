import React from "react";
import backgroundImage from "../Assets/images/weather.jpg";
import { Select } from "antd";
import "./Weather.css";

const { Option } = Select;
function Weather() {
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
          <Select showSearch style={{ width: 200 }} optionFilterProp="children">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </div>
        {/* FirstBox */}
        <div className="firstBox">
          <div>MArch 2</div>
          <div>
            <span> State Name</span>
          </div>
        </div>
        {/* FirstBox End */}
        <div className="secondBox">
          <div className="subBox">
            <div className="degree">
              4c
              <div className="subdegree">FEEL LIKE 7c</div>
            </div>

            <div className="weatherBox">
              <i class="fas fa-wind" style={{ marginTop: "10px" }}></i>
              &nbsp;
              <div>
                Rain
                <div className="subweather">40%</div>
              </div>
            </div>
            <div className="vl"></div>
            <div className="weatherBox">
              <i class="fas fa-wind" style={{ marginTop: "10px" }}></i>
              &nbsp;
              <div>
                Wind
                <div className="subweather">8KM/Hr</div>
              </div>
            </div>
            <div className="vl"></div>
            <div className="weatherBox">
              <i class="fas fa-wind" style={{ marginTop: "10px" }}></i>
              &nbsp;
              <div>
                Humidity
                <div className="subweather">5%</div>
              </div>
            </div>
            <div className="vl"></div>
            <div className="weatherBox">
              <i class="fas fa-wind" style={{ marginTop: "10px" }}></i>
              &nbsp;
              <div>
                Uvindex
                <div className="subweather">0 out of 10</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Weather;
