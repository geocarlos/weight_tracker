import {
    IAddUser,
    IAddUserSuccess,
    IAddUserError,
    IAddPerson,
    IAddWeight,
    IRequestUser,
    IReceiveUser,
    IErrorReceivingUser,
    IRequestPeople,
    IReceivePeople, 
    IErrorReceivingPeople, 
    IRequestPerson, 
    IReceivePerson, 
    IErrorReceivingPerson
} from './IActions';

type ActionTypes = IAddUser | 
IAddUserSuccess | 
IAddUserError | 
IAddPerson | 
IAddWeight | 
IRequestUser | 
IReceiveUser | 
IErrorReceivingUser | 
IRequestPeople | 
IReceivePeople | 
IErrorReceivingPeople | 
IRequestPerson | 
IReceivePerson | 
IErrorReceivingPerson;

export default ActionTypes;