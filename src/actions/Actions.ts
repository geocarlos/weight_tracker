import keys from './ActionTypeKeys';
import { 
    IRequestPeople, 
    IReceivePeople, 
    IRequestPerson, 
    IReceivePerson, 
    IAddPersonRequest,
    IAddWeightRequest,
    IAddUser,
    IRequestUser,
    IReceiveUser
} from './IActions';
import Person from 'src/model/Person';
import WeightEntry from 'src/model/WeightEntry';
import UserConfig from 'src/model/UserConfig';

export const addUser = (userConfig: UserConfig, url: string): IAddUser => ({type: keys.ADD_USER_REQUEST, userConfig, url});

export const addPerson = (person: Person, url: string): IAddPersonRequest => ({type: keys.ADD_PERSON_REQUEST, person, url})
export const addWeight = (weight: WeightEntry, personId: number, url: string): IAddWeightRequest => ({type: keys.ADD_WEIGHT_REQUEST, weight, personId, url})

export const fetchUser = (url: string): IRequestUser => ({type: keys.REQUEST_USER, url});
export function receiveUser(userConfig: UserConfig): IReceiveUser {
    return {
        type: keys.RECEIVE_USER,
        userConfig
    }
}

export const fetchPeople = (url: string): IRequestPeople => ({type: keys.REQUEST_PEOPLE, url});
export function receivePeople(people: Array<any>): IReceivePeople {
    return {
        type: keys.RECEIVE_PEOPLE,
        people
    }
}

export const fetchPerson = (url: string): IRequestPerson => ({type: keys.REQUEST_PERSON, url});
export function receivePerson(person: Person): IReceivePerson {
    return {
        type: keys.RECEIVE_PERSON,
        person
    }
}