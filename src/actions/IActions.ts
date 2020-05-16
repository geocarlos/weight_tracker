import { Action } from 'redux';
import keys from './ActionTypeKeys';
import Person from 'src/model/Person';
import WeightEntry from 'src/model/WeightEntry';
import UserConfig from 'src/model/UserConfig';

export interface IAddUser extends Action {
    readonly type: keys.ADD_USER_REQUEST,
    userConfig: UserConfig,
    url: string
}

export interface IAddUserSuccess extends Action {
    readonly type: keys.ADD_USER_SUCCESS
}

export interface IAddUserError extends Action {
    readonly type: keys.ADD_USER_ERROR
}

export interface IAddPersonRequest extends Action {
    readonly type: keys.ADD_PERSON_REQUEST,
    person: Person,
    url: string
}

export interface IAddPerson extends Action {
    readonly type: keys.ADD_PERSON,
    person: Person
}

export interface IAddPersonError extends Action {
    readonly type: keys.ADD_PERSON_ERROR,
}

export interface IAddWeightRequest extends Action {
    readonly type: keys.ADD_WEIGHT_REQUEST,
    weight: WeightEntry,
    personId: number,
    url: string
}

export interface IAddWeight extends Action {
    readonly type: keys.ADD_WEIGHT,
    weight: WeightEntry,
    personId: number,
}

export interface IAddWeightError extends Action {
    readonly type: keys.ADD_WEIGHT_ERROR
}

export interface IRequestUser extends Action {
    readonly type: keys.REQUEST_USER,
    url: string
}

export interface IReceiveUser extends Action {
    readonly type: keys.RECEIVE_USER,
    userConfig: UserConfig
}

export interface IErrorReceivingUser extends Action {
    readonly type: keys.ERROR_RECEIVING_USER
}

export interface IRequestPeople extends Action {
    readonly type: keys.REQUEST_PEOPLE,
    url: string
}

export interface IReceivePeople extends Action {
    readonly type: keys.RECEIVE_PEOPLE,
    people: Array<any>
}

export interface IErrorReceivingPeople extends Action {
    readonly type: keys.ERROR_RECEIVING_PEOPLE
}

export interface IRequestPerson extends Action {
    readonly type: keys.REQUEST_PERSON,
    url: string
}

export interface IReceivePerson extends Action {
    readonly type: keys.RECEIVE_PERSON,
    person: Person
}

export interface IErrorReceivingPerson extends Action {
    readonly type: keys.ERROR_RECEIVING_PERSON
}