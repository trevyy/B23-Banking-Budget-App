import React, { useEffect, useState } from 'react';
import "./CreateUser.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getUserData } from '../../Data';

import handleCreateEmail from '../../hooks/handleCreateEmail';
import handleCreatePassword from '../../hooks/handleCreatePassword';
import handleGetUserEmail from '../../hooks/handleGetUserEmail';
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
    e.preventDefault();
    
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
      <ToastContainer />
      <input
        type="text"
        autoComplete="off"
        placeholder="full name"
        name="fullname"
        value={newUser.fullname}
        onChange={handleChange}
        className="create-user-details"
      />
      <input
        type="email"
        autoComplete="off"
        placeholder="email"
        name="email"
        value={newUser.email}
        onChange={handleChange}
        className="create-user-details"
      />
      <input
        type="password"
        autoComplete="off"
        placeholder="password"
        name="password"
        value={newUser.password}
        onChange={handleChange}
        className="create-user-details"
      />
      <input
        type="number"
        autoComplete="off"
        placeholder="starting balance"
        name="balance"
        value={newUser.balance}
        onChange={handleChange}
        className="create-user-details"
      />
      <button onClick={handleCreateUser} className="create-user-btn"> Create User </button>
    </div>
  );
};

export default CreateUser;