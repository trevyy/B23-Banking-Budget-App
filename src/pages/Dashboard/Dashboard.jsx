import React from "react";
import "./Dashboard.scss";
import Header from "../../components/Header/Header.jsx";

const Dashboard = () => {

  return (
    <div className="dashboard">
      <div className="dashboard-main">
        <Header title="Dashboard"/>
        <div className="grid-container">
          <div className="grid-column-left">
            <div className="grid-column-left-side">
              <div id="balance" className="grid-item"><b> Total Balance </b></div>
              <div id="savings" className="grid-item"><b> Total Savings </b></div>
            </div>
            <div id="transaction" className="grid-item"><b> Transaction </b></div>
            <div id="transfer" className="grid-item"><b> Quick Transfer </b></div>
          </div>
          <div className="grid-column-right">
            <div id="debit" className="grid-item"> 
              <b> Debit </b>
            </div>
            <div id="card-info" className="grid-item"><b> Card Info </b></div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Dashboard;
  