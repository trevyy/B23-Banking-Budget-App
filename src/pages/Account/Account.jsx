import React, { useState } from "react";
import "./Account.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getUserData } from "../../Data.jsx";
import Header from "../../components/Header/Header.jsx";
import CreateUser from "../../components/CreateUser/CreateUser.jsx";
import handleNextPage from "../../hooks/useHandleNextPage.jsx";

const Account = () => {
  const users = getUserData().filter((user) => !user.isAdmin);
  const { displayedUsers, handleNext, handlePrevious } = handleNextPage(users);
  const [isAccountCreateVisible, setIsAccountCreateVisible] = useState(false);

  const toggleCreateUserVisibility = () => {
    setIsAccountCreateVisible(prevState => !prevState);
  };

  return (
    <div>
      <div className="account">
        <div className="account-main">
          <Header title="Account"/>
          <ToastContainer />
          <h2 className="account-title"> List of account holders </h2>
          <div className="account-btns">
            <button onClick={handlePrevious} className="prev-btn"> Previous </button>
            <button onClick={handleNext} className="next-btn"> Next </button>
          </div>
          <table className="account-table">
            <thead>
              <tr className="account-table-header">
                <th> Account Number </th>
                <th> Full Name </th>
                <th> Email </th>
                <th> Balance </th>
                <th> Account Type </th>
              </tr>
            </thead>
            <tbody>
              {displayedUsers.map((user) => (
                <tr key={user.userId} className="account-table-content">
                  <td> {user.accountNumber} </td>
                  <td> {user.fullname} </td>
                  <td> {user.email} </td>
                  <td> {user.balance} </td>
                  <td> {user.accountType} </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="account-create-main">
            <button onClick={toggleCreateUserVisibility} className="account-create-toggle"> Create Account </button>
            {isAccountCreateVisible && <CreateUser className="account-create"/>}
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Account;
  