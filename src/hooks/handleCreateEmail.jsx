import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleCreateEmail = (email) => {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailFormat)) {
        toast.error("Please enter a valid email address.");
        return null;
    }

    return email;
};

export default handleCreateEmail;