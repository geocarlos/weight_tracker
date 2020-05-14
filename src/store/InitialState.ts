import IStore from './IStore';

export const initialState: IStore = {
    peopleList: {
        people: [],
        isLoading: false,
        hasError: false
    },
   individual: {
    person: {
        id: NaN,
        name: '',
        height: NaN,
        weights: []
    },
    isLoading: false,
    hasError: false
   }
}