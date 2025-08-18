"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { username: "john_doe", role: "member" },
    { username: "jane_doe", role: "admin" },
    { username: "guest_user", role: "guest" },
];
//Implementing type narrowing
//By using :User in here we are saying that we are using a function with a return type of User
function fetchUserData(username) {
    const user = users.find((data) => data.username === username);
    if (!user) {
        throw new Error(`User with ${username} not found`);
    }
    //returns the actual user
    return user;
}
//# sourceMappingURL=functionReturnTypes.js.map