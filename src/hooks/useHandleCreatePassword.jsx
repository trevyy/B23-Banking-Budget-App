import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleCreatePassword = (password) => {
    const passwordFormat = /^[a-zA-Z0-9]{8,12}$/;

    if (!password.match(passwordFormat)) {
        toast.error("Password must be between 8 to 12 characters and only alphanumeric.");
        return null;
    }

    return password;
};

export default handleCreatePassword;
