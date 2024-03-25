import React, { useState } from "react";
import "./Transfer.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getUserData } from "../../Data.jsx";
import Header from "../../components/Header/Header.jsx";
import DisplayTransfer from "../../components/DisplayTransfer/DisplayTransfer.jsx";

import findUser from "../../hooks/useUserFinder.jsx";
import handleTransfer from "../../hooks/useHandleTransfer.jsx";
import handleNextPage from "../../hooks/useHandleNextPage.jsx";
import handleNumberFormat from "../../hooks/useHandleNumberFormat.jsx";

const Transfer = () => {
  const userData = getUserData() || [];
  const [transferAmount, setTransferAmount] = useState("");
  const [recipientAccountNumber, setRecipientAccountNumber] = useState("");

  const currentUser = findUser("currentUser");
  const recipient = userData.find(user => user.accountNumber === recipientAccountNumber);
  const { displayedUsers, handleNext, handlePrevious, currentPage, totalPages } = handleNextPage(currentUser.transfers);
  const userBalance = handleNumberFormat(currentUser.balance);

  const handleTransferMoney = () => {
    handleTransfer(currentUser, recipient, transferAmount, setTransferAmount, setRecipientAccountNumber, userData);
  }

  return (
    <div className="transfer">
      <div className="transfer-main">
        <Header title="Transfer"/>
        <ToastContainer />
        <p className="transfer-balance">
          <b> Current Balance: </b> ₱{userBalance}
        </p>
        <input 
          type="number"
          className="transfer-amount"
          value={transferAmount} 
          onChange={(e) => setTransferAmount(e.target.value)} 
          placeholder="Enter amount to transfer"
        />
        <select
          className="transfer-number"
          value={recipientAccountNumber}
          onChange={(e) => setRecipientAccountNumber(e.target.value)}
        >
          <option>Select recipient's account number</option>
          {userData.map(user => (
            (user.accountNumber !== currentUser.accountNumber) && (user.isAdmin === false) && (
              <option key={user.accountNumber} value={user.accountNumber} className="transfer-recipient">
                {user.accountNumber} || {user.fullname}
              </option>
            )
          ))}
        </select>

        <button onClick={handleTransferMoney} className="transfer-btn"> Transfer </button>

        <p className="transfer-history">
          <b> Transfer History </b>
        </p>
        <div className="transfer-btns">
          <button onClick={handlePrevious} className="prev-btn"> Previous </button>
          <span className="pagination-info">
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={handleNext} className="next-btn"> Next </button>
        </div>

        <div className="transaction-table-page"> <DisplayTransfer user={displayedUsers} /> </div>
      </div>    
    </div>
  );
}
  
export default Transfer;
  