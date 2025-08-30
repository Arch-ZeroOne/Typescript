"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nextUserId = 1;
const users = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" },
];
function addNewUser(newUser) {
    const user = {
        id: nextUserId++,
        ...newUser,
    };
    users.push(user);
    return user;
}
addNewUser({ username: "joe_schmoe", role: "member" });
addNewUser({ username: "Toni Fowler", role: "vurikat" });
console.log(users);
//# sourceMappingURL=omitTypes.js.map