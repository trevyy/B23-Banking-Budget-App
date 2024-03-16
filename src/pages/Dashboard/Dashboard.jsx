import React from "react";
import "./Dashboard.scss";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Header from "../Header/Header.jsx";

function Dashboard() {

  return (
    <div className="dashboard">
      <Sidebar/>
      <div className="dashboard-main">
        <Header />
        <div className="grid-container">
          <div className="grid-column-left">
            <div className="grid-column-left-side">
              <div className="grid-item"><b> Total Balance </b></div>
              <div className="grid-item"><b> Total Savings </b></div>
            </div>
            <div className="grid-item"><b> Transaction </b>
            </div>
            <div className="grid-item"><b> Quick Transfer </b></div>
          </div>
          <div className="grid-column-right">
            <div className="grid-item"
                 style={{backgroundColor: "rgba(75, 0, 175, 1)"}}
            > 
              <b> Debit </b>
            </div>
            <div className="grid-item"><b> Card Info </b></div>
            {/*<div className="grid-item"><b> Add New Card </b></div>*/}
          </div>
        </div>
      </div>
    
    {/*<nav class="sidebar">    
      <div class="sidebar-sticky">
        <ul class="nav nav-pills  nav-fill flex-column" role="tablist" style="margin-top:42px;">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="pill" href="#/!" style="text-align:left;">
              <img src="/images/windows.png" style="height:20px;"/>
              Dashboard
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#!people" style="text-align:left;">
              <img src="/images/people.png" style="height:20px;"/>                                
              People
            </a>
          </li>
        </ul>
      </div>
    </nav>*/}
    
    </div>
  );
}
  
export default Dashboard;
  