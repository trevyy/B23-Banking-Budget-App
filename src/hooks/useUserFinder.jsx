import { getUserData } from "../Data";

const findUser = () => {
    const userId = localStorage.getItem("currentUser");
    const userData = getUserData() || [];
    const user = userData.find(user => user.userId === userId);
    return user;
}

export default findUser; 
