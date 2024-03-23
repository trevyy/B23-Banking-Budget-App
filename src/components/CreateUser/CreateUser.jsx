import React, { useEffect, useState } from 'react';
import "./CreateUser.scss";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getUserData } from '../../Data';
import handleCreateEmail from '../../hooks/useHandleCreateEmail';
import handleCreatePassword from '../../hooks/useHandleCreatePassword';
import handleGetUserEmail from '../../hooks/useHandleGetUserEmail';
import cardNum from '../../hooks/useCardNumberGenerator';

const CreateUser = () => {
  const [newUser, setNewUser] = useState({
    userId: "",
    accountNumber: "",
    fullname: "",
    email: "",
    password: "",
    balance: 0,
    accountType: "Savings Account",
    isAdmin: false,
    isLoggedIn: false,
    transactions: [],
    transfers: [],
    expenseList: [],
  });

  const [existingUsers, setExistingUsers] = useState(getUserData());
  
  const handleCreateUser = () => {    
    const validEmail = handleCreateEmail(newUser.email);
    const validPassword = handleCreatePassword(newUser.password);

    if (!validEmail || !validPassword) {
      return;
    }

    const isExistingUser = handleGetUserEmail(validEmail, existingUsers);
    if (isExistingUser) {
      toast.error("User with this email already exists!");
      return;
    }

    const updatedNewUser = {
      ...newUser,
      userId: crypto.randomUUID(),
      accountNumber: cardNum(),
    };

    setExistingUsers( users => [...users, updatedNewUser]);
    toast.success("User created successfully!");
  }

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(existingUsers));
  }, [existingUsers])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  }

  return (
    <div className="create-user">
      <div className="create-user-main">
        <div className="create-user-name"> 
          Full Name: &nbsp;
          <input
            type="text"
            autoComplete="off"
            placeholder="full name"
            name="fullname"
            value={newUser.fullname}
            onChange={handleChange}
            className="create-user-details"
          /> 
        </div>
        <div className="create-user-email">
          Email: &nbsp;
          <input
            type="email"
            autoComplete="off"
            placeholder="email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
            className="create-user-details"
          />
        </div>
        <div className="create-user-password">
          Password: &nbsp;
          <input
            type="password"
            autoComplete="off"
            placeholder="password"
            name="password"
            value={newUser.password}
            onChange={handleChange}
            className="create-user-details"
          />
        </div>
        <div className="create-user-balance">
          Balance: &nbsp;
          <input
            type="number"
            autoComplete="off"
            placeholder="starting balance"
            name="balance"
            value={newUser.balance}
            onChange={handleChange}
            className="create-user-details"
          />
        </div>
      </div>
      <button onClick={handleCreateUser} className="create-user-btn"> Create User </button>
    </div>
  );
};

export default CreateUser;