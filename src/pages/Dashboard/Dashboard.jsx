import React, { useState } from 'react';
import "./Dashboard.scss";
//import Sidebar from 'Sidebar/Sidebar.jsx';

function Dashboard() {
  
  return (
    <>
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
    <Sidebar/>
    </>
  );
}
  
export default Dashboard;
  