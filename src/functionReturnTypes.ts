type UserRole = "guest" | "member" | "admin";

type User = {
  username: string;
  role: UserRole;
};

const users: User[] = [
  { username: "john_doe", role: "member" },
  { username: "jane_doe", role: "admin" },
  { username: "guest_user", role: "guest" },
];

//By using :User in here we are saying that we are using a function with a return type of User
function fetchUserData(username: string): User {
  const user = users.find((data) => data.username === username);

  if (!user) {
    throw new Error(`User with ${username} not found`);
  }

  //returns the actual user
  return user;
}
