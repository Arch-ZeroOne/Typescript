type User = {
  id: number;
  username: string;
  role: "member" | "contributor" | "admin" | "vurikat";
};

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: "john_doe", role: "member" },
  { id: nextUserId++, username: "jane_smith", role: "contributor" },
];

function addNewUser(newUser: Omit<User, "id">): User {
  const user: User = {
    id: nextUserId++,
    ...newUser,
  };
  users.push(user);

  return user;
}

addNewUser({ username: "joe_schmoe", role: "member" });
addNewUser({ username: "Toni Fowler", role: "vurikat" });

console.log(users);
