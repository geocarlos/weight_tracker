import User from "./User";
import Person from "./Person";

interface UserConfig {
    user: User,
    userPerson: Person,
    saveWeightsLocally: Boolean,
    people?: Array<Person>
}

export default UserConfig;