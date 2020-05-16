import React, { useEffect, useState } from 'react';
import People from './src/components/People';
import AddPerson from './src/components/AddPerson';
import Entry from './src/components/Entry';
import AddEntry from './src/components/AddEntry';
import { Provider } from 'react-redux';
import store from './src/store';
import RegisterPage from './src/components/RegisterPage';
import User from './src/model/User';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View } from 'react-native';
import UserType from './src/model/UserType';
import UserConfig from './src/model/UserConfig';

enum Pages {
  REGISTER = 'registerPage',
  PEOPLE = 'people',
  ADD = 'addPerson',
  ENTRY = 'entry',
  ADD_ENTRY = 'addEntry',
  LOADING = 'loading'
}

const Loading = () => (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Loading...</Text></View>);

const App = () => {

  const [user, setUser] = useState<User>();
  const [page, setPage] = useState<Pages>(Pages.LOADING);
  const [person, setPerson] = useState<any>(null);

  const View = {
    people: <People setPage={setPage} setPerson={setPerson} />,
    addPerson: <AddPerson setPage={setPage} />,
    entry: <Entry setPage={setPage} person={person} />,
    addEntry: <AddEntry setPage={setPage} />,
    registerPage: <RegisterPage />,
    loading: <Loading />
  }

  const getUser = async () => {
    try {
      const config = await AsyncStorage.getItem('@userConfig');
      if(!config) {
        setPage(Pages.REGISTER);
      } else {
        const _config: UserConfig = JSON.parse(config || '{}');
        if(_config?.user.type === UserType.INDIVIDUAL) {
          setPage(Pages.ENTRY);
          setPerson(_config.userPerson)
        }
        setUser(_config.user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
    if(user) {
      setPage(Pages.PEOPLE);
    }
  })

  return (
    <Provider store={store}>
     {View[page]}
    </Provider>
  )
}

export default App;