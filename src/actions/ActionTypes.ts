import {
    IAddPerson,
    IAddWeight,
    IRequestPeople,
    IReceivePeople, 
    IErrorReceivingPeople, 
    IRequestPerson, 
    IReceivePerson, 
    IErrorReceivingPerson
} from './IActions';

type ActionTypes = IAddPerson | IAddWeight | IRequestPeople | IReceivePeople | IErrorReceivingPeople | IRequestPerson | IReceivePerson | IErrorReceivingPerson;

export default ActionTypes;