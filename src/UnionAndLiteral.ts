type User = {
  username: string;
  role: "guest" | "member" | "admin";
};

//Sets the allowed type of role in the User role
//The value's of UserRole is called literals
type UserRole = "guest" | "member" | "admin";

const user1: UserRole = "guest";

const user2: User = {
  username: "MernMagician",
  role: "admin",
};
  