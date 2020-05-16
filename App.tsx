import React, { useEffect, useState } from 'react';
import People from './src/components/People';
import AddPerson from './src/components/AddPerson';
import Entry from './src/components/Entry';
import AddEntry from './src/components/AddEntry';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/store';
import RegisterPage from './src/components/RegisterPage';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View } from 'react-native';
import UserType from './src/model/UserType';
import UserConfig from './src/model/UserConfig';
import InitialPage from './src/components/InitialPage';
import { receiveUser } from './src/actions/Actions';
import { UserState } from './src/model/UserState';

enum Pages {
  INITIAL = 'initialPage',
  REGISTER = 'registerPage',
  PEOPLE = 'people',
  ADD = 'addPerson',
  ENTRY = 'entry',
  ADD_ENTRY = 'addEntry',
  LOADING = 'loading'
}

const Loading = () => (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Loading...</Text></View>);

const Start = () => {

  const dispatch = useDispatch();
  const userConfig = useSelector<UserState, UserConfig | null>(state => state.user);
  const [page, setPage] = useState<Pages>(Pages.LOADING);
  const [person, setPerson] = useState<any>(null);

  const View = {
    initialPage: <InitialPage setPage={setPage} setPerson={setPerson} />,
    people: <People setPage={setPage} setPerson={setPerson} />,
    addPerson: <AddPerson setPage={setPage} />,
    entry: <Entry setPage={setPage} person={person} />,
    addEntry: <AddEntry setPage={setPage} />,
    registerPage: <RegisterPage />,
    loading: <Loading />
  }

  const getUser = async (dispatch: any) => {
    try {
      const config = await AsyncStorage.getItem('@userConfig');
      if(!config) {
        setPage(Pages.INITIAL);
      } else {
        const _config: UserConfig = JSON.parse(config || '{}');
        dispatch(receiveUser(_config));
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }

  useEffect(() => {
    AsyncStorage.removeItem('@userConfig');
    getUser(dispatch);
    if (userConfig) {
      if(userConfig?.user.type === UserType.TRAINER) {
        setPage(Pages.PEOPLE); 
      } else {
        setPerson(userConfig?.userPerson);
        setPage(Pages.ENTRY);
      }
    }
  }, [dispatch, userConfig])

  return (
    <>
     {View[page]}
    </>
  )
}

const App = () => (<Provider store={store}><Start /></Provider>);

export default App;