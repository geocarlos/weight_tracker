import Person from '../model/Person';
import { PeopleState, PersonState } from 'src/model/PeopleState';

export default interface IStore {
    peopleList: PeopleState,
    individual: PersonState
}