import { put, takeLatest, all } from 'redux-saga/effects';
import { receivePeople, receivePerson } from '../actions/Actions';
import { IRequestPeople, IRequestPerson } from '../actions/IActions';
import keys from '../actions/ActionTypeKeys';

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

export default function* rootSaga() {
    return yield all([
        takeLatest(keys.REQUEST_PEOPLE, fetchPeople),
        takeLatest(keys.REQUEST_PERSON, fetchPerson)
    ]);
}