import React from "react";
import "./Account.scss";
import Header from "../../components/Header/Header.jsx";
import CreateUser from "../../components/CreateUser/CreateUser.jsx";
import { userData } from "../../Data.jsx";

const Account = () => {
  const users = userData.filter((user) => !user.isAdmin);
  console.log("users: " + users);
  return (
    <div>
      <div className="create-account">
        <div className="create-account-main">
          <Header title="Account"/>
          <h2 className="user-title">List of account holders</h2>
          <table className="user-table">
            <thead>
              <tr className="user-table-header">
                <th>Account Number</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th>Account Type</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.userId} className="user-table-content">
                  <td>{user.accountNumber}</td>
                  <td>{user.fullname}</td>
                  <td>{user.email}</td>
                  <td>{user.balance}</td>
                  <td>{user.accountType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
{/*
  return (
    <div className="create-account">
      <div className="create-account-main">
        <Header title="Account"/>
        Account - page
        <CreateUser />
      </div>    
    </div>
  );
  */}
}
  
export default Account;
  