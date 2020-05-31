import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { fetchPeople, fetchUser } from '../actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
import UserConfig from '../model/UserConfig';
import UserType from '../model/UserType';
import AsyncStorage from '@react-native-community/async-storage';

const InitialPage = ({setPage, setPerson}: any) => {

    const [username, setUsername] = useState<string>('');
    const dispatch = useDispatch();
    const userConfig = useSelector<any, UserConfig | undefined>(state => state.appUser.user);

    const _fetchUser = (username: string) => {        
        dispatch(fetchUser(`http://10.0.2.2:3003/users/${username}`));
    }

    useEffect(() => {
        if (userConfig) {
            AsyncStorage.setItem('@userConfig', JSON.stringify(userConfig));
           if (userConfig.user.type === UserType.TRAINER) {
               setPage('people');
               dispatch(fetchPeople(`http://10.0.2.2:3003/people/${username}`));
           } else {
               setPerson(userConfig.userPerson);
               setPage('entry');
           }
        }
    }, [userConfig])

    return (
       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View>
            <Text>
                No user found. Please enter a username.
            </Text>
            <TextInput style={{borderBottomWidth: 1, marginBottom: 3, backgroundColor: 'lightgrey'}} onChangeText={text => setUsername(text)} />            
            <Button title="Enter" onPress={() => _fetchUser(username)}/>
        </View>
        <View>
            <Text>
                Otherwise, create a user
            </Text>
            <Button title="Create User" onPress={() => setPage('registerPage')}/>
        </View>
       </View>
    )
}

export default InitialPage;