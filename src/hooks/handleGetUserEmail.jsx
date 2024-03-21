const handleGetUserEmail = (email, users) => {
    if (!Array.isArray(users)) {
        return null;
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return existingUser;
    }
    return null;
}

export default handleGetUserEmail;