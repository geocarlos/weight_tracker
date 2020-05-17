import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';
import { receiveUser } from '../actions/Actions';

const Settings = () => {
    const dispatch = useDispatch();

    const leaveApp = () => {
        AsyncStorage.removeItem('@userConfig');
        dispatch(receiveUser(undefined));
    }

    return (
        <>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>Save Weights Locally</Text>
                <Text>User Type</Text>
                <Text>Password</Text>
                <Text>E-mail</Text>
            </View>
            <View style={{ width: '100%', justifyContent: 'flex-end' }}>
                <Button title="LEAVE APP" onPress={leaveApp} />
            </View>
        </>
    )
}

export default Settings;