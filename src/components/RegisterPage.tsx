import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Picker } from '@react-native-community/picker';
import { View, Text, TextInput, Button } from 'react-native';
import UserType from '../../src/model/UserType';
import UserConfig from '../../src/model/UserConfig';

const addUserConfig = async (config: UserConfig) => {
    try {
        await AsyncStorage.setItem('@userConfig', JSON.stringify(config));
    } catch (error) {
        console.log(error);
    }
}

const RegisterPage = () => {
    const [username, setUsername] = useState<String>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<String>('');
    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0)
    const [email, setEmail] = useState<String>('');
    const [type, setType] = useState<UserType>(UserType.INDIVIDUAL);
    const [saveWeightsLocally, setSaveWeightsLocally] = useState('no');
    return (
        <View>
            <Text>
                Please Enter Info Below
            </Text>
            <TextInput placeholder="Username" onChangeText={text => setUsername(text)} />
            <TextInput placeholder="Your full name" onChangeText={text => setName(text)} />
            <TextInput placeholder="Height" onChangeText={text => setHeight(parseInt(text))} />
            <TextInput placeholder="Your current weight" onChangeText={text => setWeight(parseInt(text))} />
            <TextInput placeholder="Password (optional)" onChangeText={text => setPassword(text)} />
            <TextInput placeholder="E-mail (optional)" onChangeText={text => setEmail(text)} />
            <Text>
                Select if you're a trainer or this is just for yourself:
            </Text>
            <Picker selectedValue={type} onValueChange={value => setType(value.toString() === UserType.INDIVIDUAL ? UserType.INDIVIDUAL : UserType.TRAINER)}>
                <Picker.Item label="Personal" value={UserType.INDIVIDUAL} />
                <Picker.Item label="Trainer" value={UserType.TRAINER} />
            </Picker>
            <Text>
                Wanna save your weights locally?
            </Text>
            <Picker selectedValue={saveWeightsLocally} onValueChange={value => setSaveWeightsLocally(value.toString())}>
                <Picker.Item label="Yes" value={'yes'} />
                <Picker.Item label="No" value={'no'} />
            </Picker>
            <Button title="Register" onPress={() =>  addUserConfig({
                user: {
                    username,
                    password,
                    email,
                    type
                },
                userPerson: {
                    name,
                    height,
                    weights: [{weight, date: new Date()}]
                },
                saveWeightsLocally: saveWeightsLocally === 'yes'
            })} />
        </View>
    )
}

export default RegisterPage;