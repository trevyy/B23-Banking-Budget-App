import React, { useState } from "react";
import "./Transaction.scss";

import Header from "../../components/Header/Header.jsx";
import DisplayTransactions from "../../components/DisplayTransactions/DisplayTransactions.jsx";

import findUser from "../../hooks/useUserFinder.jsx";
import handleTransaction from "../../hooks/useHandleTransaction.jsx";
import handleNextPage from "../../hooks/useHandleNextPage.jsx";
import handleNumberFormat from "../../hooks/useHandleNumberFormat.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Transaction = () => {
  const user = findUser("currentUser");
  const userBalance = handleNumberFormat(user.balance);
  const [amount, setAmount] = useState(0);
  const { displayedUsers, handleNext, handlePrevious } = handleNextPage(user.transactions);

  const handleDeposit = () => {
    handleTransaction(user, amount, setAmount, true);
  };

  const handleWithdraw = () => {
    handleTransaction(user, amount, setAmount, false);
  };

  return (
    <div className="transaction">
      <div className="transaction-main">
        <Header title="Transaction"/>
        <ToastContainer />
        <p className="transaction-balance">
          <b> Current Balance: </b> ₱{userBalance}
        </p>

        <div className="transaction-input">
          <button onClick={handleDeposit} className="deposit-btn"> Deposit </button>
          <button onClick={handleWithdraw} className="withdraw-btn"> Withdraw </button>
          <input
            type="number"
            className="transaction-number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />  
          </div>

        <p className="transaction-history">
          <b> Transaction History </b>
        </p>
        <div className="transaction-btns">
          <button onClick={handlePrevious} className="prev-btn"> Previous </button>
          <button onClick={handleNext} className="next-btn"> Next </button>
        </div>

        <div className="transaction-table-page"> <DisplayTransactions user={displayedUsers} /> </div>
      </div>
    </div>
  );
}
  
export default Transaction;
