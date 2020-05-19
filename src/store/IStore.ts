import Person from '../model/Person';
import { PeopleState, PersonState } from '../../src/model/PeopleState';
import { UserState } from '../../src/model/UserState';

export default interface IStore {
    appUser: UserState,
    peopleList: PeopleState,
    individual: PersonState
}