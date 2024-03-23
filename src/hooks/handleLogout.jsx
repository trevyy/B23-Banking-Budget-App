import { useNavigate } from "react-router-dom";

import { getUserData } from "../Data";

const handleLogout = () => {
    const navigate = useNavigate();
    const userData = getUserData();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        const userIndex = userData.findIndex(
            (user) => 
                user.email === currentUser.email && user.password === currentUser.password
        );

        if (userIndex !== -1) {
            userData[userIndex].setIsLoggedIn = false;
            localStorage.removeItem("currentUser");
            localStorage.setItem("userData", JSON.stringify(userData));
        }
    }
    console.log("redirecting to login");
    localStorage.setItem("isLoggedIn", false);
    navigate("/login");
}

export default handleLogout;
