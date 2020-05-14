import Person from "./Person";

export interface PeopleState {
    people: Array<Person>,
    isLoading: Boolean,
    hasError: Boolean
}

export interface PersonState {
    person: Person,
    isLoading: Boolean,
    hasError: Boolean
}