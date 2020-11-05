import React from "react";
import { Table, Input } from "antd";
import Papa from "papaparse";

const columns = [
  {
    title: "",
    width: "5%",
  },
  {
    title: "State / UT",
    dataIndex: "State",
  },
  {
    title: "Confirmed",
    dataIndex: "Confirmed",
  },
  {
    title: "Active",
    dataIndex: "Active",
  },
  {
    title: "Recovered",
    dataIndex: "Recovered",
  },
  {
    title: "Deceased",
    dataIndex: "Deaths",
  },
];

function Home() {
  const [rows, setRows] = React.useState([]);
  const [filterContactValue, setFilterContactValue] = React.useState("");

  React.useEffect(() => {
    debugger;
    Papa.parse("/state.csv", {
      download: true,
      complete: (data) => {
        setRows(data.data);
      },
    });
  }, []);

  var objs = rows
    .filter((item, i) => i !== 0 && i !== 1)
    .map(function (x) {
      return {
        State: x[0],
        Confirmed: x[1],
        Recovered: x[2],
        Deaths: x[3],
        Active: x[4],
      };
    });
  const filteredContact = React.useMemo(() => {
    console.log(objs);
    return filterContactValue === ""
      ? objs
      : objs.filter((objs) => {
          debugger;

          return objs.State.toLowerCase().includes(
            filterContactValue.toLowerCase()
          );
        });
  }, [filterContactValue, objs]);
  console.log(filteredContact);

  function handleChange(e) {
    debugger;
    setFilterContactValue(e.target.value);
  }
  console.log(filterContactValue);
  console.log(objs);
  return (
    <div>
      <div
        style={{
          border: "1px solid rgb(0, 191, 255)",
          width: "50%",
          float: "right",
          margin: "10px",
        }}
      >
        <Input.Search
          // prefix={<UserOutlined />}
          placeholder="input search text"
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      </div>

      <Table columns={columns} dataSource={filteredContact}></Table>
    </div>
  );
}
export default Home;
