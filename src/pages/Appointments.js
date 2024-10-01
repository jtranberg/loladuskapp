import React from "react";
import { InlineWidget } from "react-calendly";
import "../styles/appointments.css";


class Appointments extends  React.Component {
  render(){
  return (
    <div className="App">

<h1 className="banner">Book the appoint to find Your Inner Being</h1>
    <div className="widget" >
      <InlineWidget url="https://calendly.com/loladusk"  />
    </div></div>
  );
};
}
export default Appointments;