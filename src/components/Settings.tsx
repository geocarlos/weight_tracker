import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Picker } from '@react-native-community/picker';
import { useDispatch } from 'react-redux';
import { receiveUser } from '../actions/Actions';
import UserType from '../model/UserType';

const Settings = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<String>('');
    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0)
    const [email, setEmail] = useState<String>('');
    const [type, setType] = useState<UserType>(UserType.INDIVIDUAL);
    const [saveWeightsLocally, setSaveWeightsLocally] = useState('no');

    const leaveApp = () => {
        AsyncStorage.removeItem('@userConfig');
        dispatch(receiveUser(undefined));
    }

    return (
        <>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>Save Weights Locally</Text>
                <Picker style={{ width: '25%' }} selectedValue={saveWeightsLocally} onValueChange={value => setSaveWeightsLocally(value.toString())}>
                    <Picker.Item label="Yes" value={'yes'} />
                    <Picker.Item label="No" value={'no'} />
                </Picker>
                <Text>User Type</Text>
                <Picker style={{ width: '40%' }} selectedValue={type} onValueChange={value => setType(value.toString() === UserType.INDIVIDUAL ? UserType.INDIVIDUAL : UserType.TRAINER)}>
                    <Picker.Item label="Personal" value={UserType.INDIVIDUAL} />
                    <Picker.Item label="Trainer" value={UserType.TRAINER} />
                </Picker>
                <Text>Password</Text>
                <Text>E-mail</Text>
                <View style={{ width: '50%', justifyContent: 'flex-end' }}>
                    <Button color="red" title="LEAVE APP" onPress={leaveApp} />
                </View>
            </View>
        </>
    )
}

export default Settings;