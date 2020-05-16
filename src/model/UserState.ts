import UserConfig from "./UserConfig";

export interface UserState {
    user: UserConfig | null,
    isLoading: boolean,
    hasError: boolean
}