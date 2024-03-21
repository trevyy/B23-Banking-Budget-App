import React from "react";
import "./Dashboard.scss";
import Header from "../../components/Header/Header.jsx";
import findUser from "../../hooks/useUserFinder.jsx";
import { CardChip } from "../../assets/icons.jsx";

const Dashboard = () => {
  const user = findUser();

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
              <p className="debit-title"> Debit <b>JTT Bank</b></p>
              <p className="debit-number"> {user.accountNumber} </p>
              <p className="debit-balance"> ₱{user.balance} </p>
              <p className="debit-name"> {user.fullname} < CardChip className="card-chip"/> </p>
            </div>
            <div id="card-info" className="grid-item">
              <b className="info-title"> Card Info </b>
              <p className="info-number"> <b>Card Number</b> <br/> {user.accountNumber} </p>
              <p className="info-name"> <b>Name</b> <br/> {user.fullname} </p>
              <p className="info-balance"> <b>Balance</b> <br/> ₱{user.balance} </p>
              <p className="info-type"> <b>Account Type</b> <br/> {user.accountType} </p>
              <p className="info-bank"> <b>Bank</b> <br/> JTT Bank </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Dashboard;
  