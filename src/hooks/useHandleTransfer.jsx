import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dayjs from "dayjs";

const handleTransfer = (user, recipient, TransferAmount, setTransferAmount, setRecipientAccountNumber, userData) => {
    const transferDate = dayjs().format("YYYY-MM-DD, hh:mm:ss A");
    let amount = parseInt(TransferAmount, 10);

    if (recipient) {
        if (user.balance >= amount) {
            user.balance = parseInt(user.balance) - amount;
            user.transfers.push({ type: "transfer to", recipient: recipient.accountNumber, amount: amount, date: transferDate });
            recipient.balance = parseInt(recipient.balance) + amount;
            recipient.transfers.push({ type: "received from", recipient: user.accountNumber, amount: amount, date: transferDate });

            const updatedUsers = userData.map(userDataItem => {
                if (userDataItem.userId === user.userId) {
                    return user;
                } else if (userDataItem.userId === recipient.userId) {
                    return recipient;
                } else {
                    return userDataItem;
                }
            });

            localStorage.setItem("userData", JSON.stringify(updatedUsers));
            
            setTransferAmount("");
            setRecipientAccountNumber("");
            
            toast.success("Transfer successful!");
        } else {
            toast.error("Insufficient balance.");
        }
    } else {
        toast.error("Recipient not found.");
    }
};

export default handleTransfer;