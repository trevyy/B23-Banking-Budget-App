import React from 'react';
import "./DisplayTransactions.scss";

const DisplayTransactions = (user) => {
  const reversedTransactions = [...user];

  return(
    <table className="transaction-table">
      <thead>
        <tr className="transaction-table-header">
          <th> Amount </th>
          <th> Type of Transaction </th>
          <th> Date </th>
        </tr>
      </thead>
  
      <tbody>
      {reversedTransactions.map((transaction, index) => ( 
        <tr key={`${transaction.type}-${index}`} className="transaction-table-content"> 
          <td> ₱{transaction.amount} </td>
          <td> {transaction.type} </td>
          <td> {transaction.date} </td> 
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default DisplayTransactions