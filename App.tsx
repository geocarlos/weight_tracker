import React, { useEffect, useState } from 'react';
import People from './src/components/People';
import AddPerson from './src/components/AddPerson';
import Entry from './src/components/Entry';
import AddEntry from './src/components/AddEntry';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/store';
import RegisterPage from './src/components/RegisterPage';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import UserType from './src/model/UserType';
import UserConfig from './src/model/UserConfig';
import InitialPage from './src/components/InitialPage';
import { receiveUser } from './src/actions/Actions';
import Settings from './src/components/Settings';
import AllEntries from './src/components/AllEntries';

enum Pages {
  INITIAL = 'initialPage',
  REGISTER = 'registerPage',
  PEOPLE = 'people',
  ADD = 'addPerson',
  ENTRY = 'entry',
  ADD_ENTRY = 'addEntry',
  LOADING = 'loading',
  SETTINGS = 'settings'
}

const Loading = () => (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Loading...</Text></View>);

const Start = () => {

  const dispatch = useDispatch();
  const [page, setPage] = useState<Pages>(Pages.LOADING);
  const [previousPage, setPreviousPage] = useState<Pages>(Pages.LOADING);
  const [person, setPerson] = useState<any>(null);
  const userConfig = useSelector<any, UserConfig | undefined>(state => state.appUser.user);
  const isLoading = useSelector<any, boolean>(state => state.appUser.isLoading);

  const CurrentView = {
    initialPage: <InitialPage setPage={setPage} setPerson={setPerson} />,
    people: <People setPage={setPage} setPerson={setPerson} />,
    addPerson: <AddPerson setPage={setPage} />,
    entry: <Entry setPage={setPage} person={person} />,
    addEntry: <AddEntry setPage={setPage} person={person} />,
    allEntries: <AllEntries setPage={setPage} entries={person?.weights} />,
    registerPage: <RegisterPage setPage={setPage} />,
    loading: <Loading />,
    settings: <Settings />
  }

  const getUser = async (dispatch: any) => {
    try {
      const config = await AsyncStorage.getItem('@userConfig');
      if (!config) {
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
    getUser(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (userConfig) {
      const firstPage = userConfig.user.type === UserType.TRAINER ? Pages.PEOPLE : Pages.ENTRY;
      if (firstPage === Pages.ENTRY) {
        setPerson(userConfig.userPerson);
      }
      setPage(isLoading ? Pages.LOADING : firstPage);
    } else {
      setPage(Pages.INITIAL);
    }
  }, [userConfig]);

  return (
    <>
      <View style={styles.appName}>
          <Text style={{ color: 'white' }}>
            Weight Tracker
          </Text>
          {page !== Pages.LOADING && page !== Pages.INITIAL && <View style={styles.settingsButton}>
            <TouchableOpacity onPress={() => {
              setPreviousPage(page);
              setPage(page === Pages.SETTINGS ? previousPage : Pages.SETTINGS);}}>
              <Text style={{color: 'white'}}>{page === Pages.SETTINGS || page === Pages.REGISTER ? 'Back' : 'Settings'}</Text>
            </TouchableOpacity>
         </View>}
      </View>
      <StatusBar backgroundColor="grey" />
      {CurrentView[page]}
    </>
  )
}

const styles = StyleSheet.create({
  appName: {
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: 'purple'
  },
  settingsButton: {
    width: '20%',
    position: 'absolute',
    top: 5,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const App = () => (<Provider store={store}><Start /></Provider>);

export default App;