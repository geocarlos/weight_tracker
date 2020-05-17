import UserConfig from "./UserConfig";

export interface UserState {
    user: UserConfig | undefined,
    isLoading: boolean,
    hasError: boolean
}