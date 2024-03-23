import { getUserData } from "../Data";

const findUser = (key) => {
    const userId = localStorage.getItem(key);
    const userData = getUserData() || [];
    const user = userData.find(user => user.userId === userId);
    return user;
}

export default findUser; 
