import React, { useEffect, useState } from "react";

function EmpView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/api/company/employee/display_all_data").then(
      (result) => {
        result.json().then((res) => {
          console.warn("result", res);
          setData(res.response);
        });
      }
    );
  },[]);

console.warn(data);
  return (
    <div className="d-flex flex-wrap  justify-Content-center ">
      {data.map((value,index) => {
        return (
          <Card
            Empid={value.empid}
            EmpName={value.empName}
            Mobile={value.mobile}
            City={value.city}
            Address={value.address}
            JoiningDate={value.joiningDate}
          />
        );
      })}
    </div>
  );
}

function Card(props) {
  return (
    <div style={{ color: "gold", margin: "20px" }}>
      <div
        className="card"
        style={{
          width: "300px",
          backgroundColor: "black",
          boxShadow: "5px 5px 12px magenta",
          borderRadius: "10px 40px",
          marginLeft: "25%"
          
        }}
      >
        <div className="card-body " >
          <h5
            style={{ textAlign: "center", fontWeight: "600",color:"white" }}
            className="card-title"
          >
            {"EmpID:"+ " " +  props.Empid}
          </h5>
          <h5 className="card-title ">{"Emp_Name:-" + " "+ props.EmpName }</h5>
          <h5 className="card-title">{"mobile:-" + " " + props.Mobile}</h5>
          <h5 className="card-title">{"city:-" +  "  " + props.City}</h5>
          <h5 className="card-title">{"address:-" + " " + props.Address}</h5>
          <h5 className="card-title">{"joiningDate:-" + " " + props.JoiningDate}</h5>
        </div>
      </div>
    </div>
  );
}

export { EmpView, Card };
