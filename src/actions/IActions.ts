import { Action } from 'redux';
import keys from './ActionTypeKeys';
import Person from 'src/model/Person';
import WeightEntry from 'src/model/WeightEntry';

export interface IAddPerson extends Action {
    readonly type: keys.ADD_PERSON,
    person: Person,
    url: string
}

export interface IAddWeight extends Action {
    readonly type: keys.ADD_WEIGHT,
    weight: WeightEntry,
    personId: number,
    url: string
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
    person: Array<any>
}

export interface IErrorReceivingPerson extends Action {
    readonly type: keys.ERROR_RECEIVING_PERSON
}