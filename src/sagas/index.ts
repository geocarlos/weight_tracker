import { put, takeLatest, all } from 'redux-saga/effects';
import { receivePeople, receivePerson, receiveUser } from '../actions/Actions';
import { IRequestPeople, IRequestPerson, IAddUser, IRequestUser, IAddWeightRequest } from '../actions/IActions';
import keys from '../actions/ActionTypeKeys';

function* addUser(action: IAddUser) {
    try {
        const result = yield fetch(action.url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userConfig: action.userConfig
            })
        }).then(result => result)
        if (result === 'success') {
            yield put({type: keys.ADD_USER_SUCCESS});
        } else {
            throw new Error('Error adding user');
        }
    } catch (error) {
        yield put({type: keys.ADD_USER_ERROR})
    }
}

function* fetchPeople(action: IRequestPeople) {
    try {
        const data = yield fetch(action.url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        yield put(receivePeople(data));
    } catch (error) {
        console.log(error);
    }
}

function* fetchUser(action: IRequestUser) {
    try {
        const data = yield fetch(action.url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json(),)
        console.log(data);
        yield put(receiveUser(data));
    } catch (error) {
        yield put({type: keys.ERROR_RECEIVING_USER})
    }
}

function* fetchPerson(action: IRequestPerson) {
    try {
        const data = yield fetch(action.url, {
            method: 'GET',
            headers: {}
        })
        .then(response => response.json(),)
        yield put(receivePerson(data));
    } catch (error) {
        console.log(error);
    }
}

function* addWeight(action: IAddWeightRequest) {
    try {
        const result = yield fetch(action.url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                weight: action.weight,
                personId: action.personId
            })
        }).then(result => result)
        if (result === 'success') {
            yield put({type: keys.ADD_WEIGHT, weight: action.weight, personId: action.personId});
        } else {
            throw new Error('Error adding user');
        }
    } catch (error) {
        yield put({type: keys.ADD_USER_ERROR})
    }
}

export default function* rootSaga() {
    return yield all([
        takeLatest(keys.REQUEST_USER, fetchUser),
        takeLatest(keys.ADD_USER_REQUEST, addUser),
        takeLatest(keys.REQUEST_PEOPLE, fetchPeople),
        takeLatest(keys.REQUEST_PERSON, fetchPerson),
        takeLatest(keys.ADD_WEIGHT_REQUEST, addWeight)
    ]);
}