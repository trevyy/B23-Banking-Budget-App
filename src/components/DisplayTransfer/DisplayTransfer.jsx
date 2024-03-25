import React from "react";
import "./DisplayTransfer.scss";

const DisplayTransfer = ({ user }) => {
  const reversedTransfer = [...user];

  return(
    <table className="transfer-table">
      <thead>
        <tr className="transfer-table-header">
          <th> Amount </th>
          <th> Type of Transaction </th>
          <th> Recipient </th>
          <th> Date </th>
        </tr>
      </thead>
  
      <tbody>
      {reversedTransfer.map((transfer, index) => ( 
        <tr key={`${transfer.type}-${index}`} className="transfer-table-content"> 
          <td> ₱{transfer.amount} </td>
          <td> {transfer.type} </td>
          <th> {transfer.recipient} </th>
          <td> {transfer.date} </td> 
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default DisplayTransfer;