import { userData } from "../Data";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleTransaction = (user, amount, setAmount, isDeposit) => {
    let newBalance = 0;
    const transactionDate = dayjs().format("YYYY-MM-DD, hh:mm:ss A");
    amount = parseInt(amount, 10).toString();

    if (isDeposit) {
        newBalance = parseInt(user.balance) + parseInt(amount);
        user.transactions.push({ type: "Deposit", amount: amount, date: transactionDate });
    } else {
        if (parseFloat(amount) > parseFloat(user.balance)) {
            toast.error("Insufficient balance.");
        }
        newBalance = parseInt(user.balance) - parseInt(amount);
        user.transactions.push({ type: "Withdraw", amount: amount, date: transactionDate });
    }
    user.balance = newBalance.toString();

    const updatedUserData = userData.map(userData => (userData.userId === user.userId ? user : userData));
    localStorage.setItem("userData", JSON.stringify(updatedUserData));
    setAmount(0);
}; 

export default handleTransaction;
