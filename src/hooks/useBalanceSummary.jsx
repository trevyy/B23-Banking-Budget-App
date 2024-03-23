const useBalanceSummary = (user) => {
    let totalExpenses = 0;
    let totalIncome = 0;
  
    if(user.transactions) {
      user.transactions.forEach((transaction) => {
        if (transaction.type === "Deposit") {
          totalIncome += parseInt(transaction.amount);
        } else if (transaction.type === "Withdraw") {
          totalExpenses += parseInt(transaction.amount);
        }
      });
    }

    if(user.transfer){
      user.transfer.forEach((transfer) => {
        if (transaction.type === "transfer to") {
          totalExpenses += parseInt(transfer.amount);
        } else if (transaction.type === "received from") {
          totalIncome += parseInt(transfer.amount);
        }
    });
    }
  
    return {
      totalExpenses,
      totalIncome,
    };
};

export default useBalanceSummary;