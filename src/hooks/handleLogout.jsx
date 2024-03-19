import { useNavigate } from "react-router-dom";

const handleLogout = () => {
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("userData"));
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        const userIndex = userData.findIndex(
            (user) => 
                user.email === currentUser.email && user.password === currentUser.password
        );

        if (userIndex !== -1) {
            userData[userIndex].loginStatus = false;
            localStorage.removeItem("currentUser");
            localStorage.setItem("userData", JSON.stringify(userData));
            console.log("redirecting to login");
            navigate("/login");
        }
    }
}

export default handleLogout;
