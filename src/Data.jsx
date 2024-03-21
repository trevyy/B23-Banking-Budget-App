export const userData = [
    {
        userId: "36b8f84d-df4e-4d49-b662-bcde71a8764f",
        accountNumber: "2024-0321-1223-0515",
        fullname: "Admin",
        email: "admin@gmail.com",
        password: "password",
        balance: "0",
        accountType: "---",
        isAdmin: true,
        isLoggedIn: false,
        //buyList: [""],
    },
    {
        userId: "48b8f84d-df4e-4d49-b662-bcde71a8764g",
        accountNumber: "2024-0321-1224-0746",
        fullname: "User",
        email: "user@gmail.com",
        password: "password",        
        balance: "100000",
        accountType: "Savings Account",
        isAdmin: false,
        isLoggedIn: false,
    },
    {
        userId: "48b8f84d-df4e-1p29-c742-bcde71a2345y",
        accountNumber: "2024-0321-1224-0746",
        fullname: "John Doe",
        email: "john_doe@gmail.com",
        password: "passwordjohn",        
        balance: "430510",
        accountType: "Savings Account",
        isAdmin: false,
        isLoggedIn: false,
    },
];

const userDataKey = "userData";

export const initializeUserData = () => {
    if (!localStorage.getItem(userDataKey)) {
        localStorage.setItem(userDataKey, JSON.stringify(userData));
    }
}

export const getUserData = () => {
    return JSON.parse(localStorage.getItem(userDataKey));
}

initializeUserData();
