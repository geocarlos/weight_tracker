import UserType from "./UserType";

interface User {
    username: String,
    type: UserType,
    password?: String
    email?: String
}

export default User;