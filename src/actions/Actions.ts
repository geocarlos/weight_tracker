import keys from './ActionTypeKeys';
import { 
    IAddPerson,
    IAddWeight,
    IRequestPeople, 
    IReceivePeople, 
    IRequestPerson, 
    IReceivePerson 
} from './IActions';
import Person from 'src/model/Person';
import WeightEntry from 'src/model/WeightEntry';

export const addPerson = (person: Person, url: string): IAddPerson => ({type: keys.ADD_PERSON, person, url})
export const addWeight = (weight: WeightEntry, personId: number, url: string): IAddWeight => ({type: keys.ADD_WEIGHT, weight, personId, url})

export const fetchPeople = (url: string): IRequestPeople => ({type: keys.REQUEST_PEOPLE, url});
export function receivePeople(people: Array<any>): IReceivePeople {
    return {
        type: keys.RECEIVE_PEOPLE,
        people
    }
}

export const fetchPerson = (url: string): IRequestPerson => ({type: keys.REQUEST_PERSON, url});
export function receivePerson(person: Array<any>): IReceivePerson {
    return {
        type: keys.RECEIVE_PERSON,
        person
    }
}