import keys from '../actions/ActionTypeKeys';
import ActionTypes from '../actions/ActionTypes';
import { initialState } from '../store/InitialState'
import { Reducer, combineReducers } from 'redux';
import { PeopleState, PersonState } from 'src/model/PeopleState';
import IStore from '../store/IStore';
import { UserState } from 'src/model/UserState';

export const peopleList: Reducer<PeopleState, ActionTypes> = (
    state = initialState.peopleList, action: ActionTypes
): PeopleState => {
    switch (action.type) {
        case keys.ADD_PERSON:
            return {...state, people: [...state.people, action.person]};
        case keys.REQUEST_PEOPLE:
            return {...state, isLoading: true};
        case keys.RECEIVE_PEOPLE:
            return {...state, people: action.people, isLoading: false};
        default:
            return state;
    }
}

export const individual: Reducer<PersonState, ActionTypes> = (
    state = initialState.individual, action: ActionTypes
): PersonState => {
    switch (action.type) {
        case keys.ADD_PERSON:
            return {...state, person: action.person};
        case keys.REQUEST_PERSON:
            return {...state, isLoading: true};
        case keys.RECEIVE_PERSON:
            return {...state, person: action.person, isLoading: false};
        default:
            return state;
    }
}

export const appUser: Reducer<UserState, ActionTypes> = (
    state = initialState.appUser, action: ActionTypes
): UserState => {
    switch (action.type) {
        case keys.ADD_USER_SUCCESS:
            return {...state, isLoading: true};
        case keys.REQUEST_USER:
            return {...state, isLoading: true};
        case keys.RECEIVE_USER:
            return {...state, user: action.userConfig, isLoading: false};
        default:
            return state;
    }
}


export default combineReducers<IStore>({
    appUser, peopleList, individual
})