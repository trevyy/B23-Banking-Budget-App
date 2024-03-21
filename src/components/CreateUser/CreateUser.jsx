import React, { useEffect, useState } from 'react';
import "./CreateUser.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { userData } from '../../Data';
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
  });

  const [existingUsers, setExistingUsers] = useState(userData);
  
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
    localStorage.setItem("users", JSON.stringify(existingUsers));
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
        placeholder="Full Name"
        name="fullname"
        value={newUser.fullname}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={newUser.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={newUser.password}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Balance"
        name="balance"
        value={newUser.balance}
        onChange={handleChange}
      />
      <button onClick={handleCreateUser}> Create User </button>
    </div>
  );
};

export default CreateUser;