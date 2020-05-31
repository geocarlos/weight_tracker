import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Picker } from '@react-native-community/picker';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import UserType from '../model/UserType';
import UserConfig from '../model/UserConfig';
import { addUser } from '../actions/Actions'
import { useDispatch } from 'react-redux';

const addUserConfig = async (dispatch: any, config: UserConfig) => {
    try {
        await AsyncStorage.setItem('@userConfig', JSON.stringify(config));
        dispatch(addUser(config, 'http://10.0.2.2:3003/users'));
    } catch (error) {
        console.log(error);
    }
}

const RegisterPage = ({ setPage }: any) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0)
    const [email, setEmail] = useState<string>('');
    const [type, setType] = useState<UserType>(UserType.INDIVIDUAL);
    const [saveWeightsLocally, setSaveWeightsLocally] = useState(false);
    const [navigationStep, setNavigationStep] = useState(0);

    const registerNavigation = [
        <>
            <TextInput value={username} style={styles.input} onChangeText={text => setUsername(text)} />
            <Text>
                Please Choose a Username
            </Text>
        </>,
        <>
            <TextInput value={name} style={styles.input} onChangeText={text => setName(text)} />
            <Text>
                Enter your full name
            </Text>
        </>,
        <>
            <TextInput keyboardType="numeric" value={height.toString()} style={styles.input} onChangeText={text => setHeight(parseInt(text) || 0)} />
            <Text>
                Enter your height
            </Text>
        </>,
        <>
            <TextInput keyboardType="numeric" value={weight.toString()} style={styles.input} onChangeText={text => setWeight(parseInt(text) || 0)} />
            <Text>
                Enter your current weight
            </Text>
        </>,
        <> 
            <TextInput value={password} style={styles.input} placeholder="Password" onChangeText={text => setPassword(text)} />
            <TextInput value={email} style={styles.input} placeholder="E-mail" onChangeText={text => setEmail(text)} />
            <Text>Choose a password and provide an e-mail address (optional)</Text>
        </>,
        <>
            <Text>
                Select if you're a coach or this is just for yourself:
            </Text>
            <Picker style={{ width: '30%' }} mode='dropdown' selectedValue={type} onValueChange={value => setType(value.toString() === UserType.INDIVIDUAL ? UserType.INDIVIDUAL : UserType.TRAINER)}>
                <Picker.Item label="Personal" value={UserType.INDIVIDUAL} />
                <Picker.Item label="Trainer" value={UserType.TRAINER} />
            </Picker>
            <Text>
                Wanna save your weights locally?
            </Text>
            <Picker
                style={{ width: '30%' }}
                selectedValue={'no'}
                mode="dropdown"
                onValueChange={value => { setSaveWeightsLocally(value.toString() === 'yes'); console.log(value) }}>
                <Picker.Item label="Yes" value={'yes'} />
                <Picker.Item label="No" value={'no'} />
            </Picker>
        </>,
        <>
            <Text>Username</Text>
            <Text>{username}</Text>
            <Text>Full name: </Text>
            <Text>{name}</Text>
            <Text>Height: </Text>
            <Text>{height}</Text>
            <Text>E-mail: </Text>
            <Text>{email || 'None'}</Text>
            <Text>User Type: </Text>
            <Text>{type}</Text>
            <Text>Save Weights Locally: </Text>
            <Text>{setSaveWeightsLocally ? 'Yes' : 'No'}</Text>
            <Text>
                If everything is correct, click 'Register'
            </Text>
             <Button title="Register" onPress={() => {
                addUserConfig(dispatch, {
                    user: {
                        username,
                        password,
                        email,
                        type
                    },
                    userPerson: {
                        name,
                        height,
                        weights: [{ weight, date: new Date() }]
                    },
                    saveWeightsLocally: saveWeightsLocally
                });
                setPage('initialPage');
            }} />
        </>
    ]

    return (
        <>
            <View style={styles.options}>
                {registerNavigation[navigationStep]}
            </View>
            <View style={styles.navButtons}>
                {navigationStep > 0 && <Button title="Previous" onPress={() => setNavigationStep(state => state - 1)}  />}
                {navigationStep < registerNavigation.length - 1 && <Button title="Next" onPress={() => setNavigationStep(state => state + 1)}  />}
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    options: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navButtons: {
        flex: 1,
        flexDirection: 'row',
        width: '100%', 
        paddingRight: 10,
        paddingLeft: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center' 
    },
    input: {
        width: '90%',
        marginBottom: 5,
        borderBottomWidth: 1
    }
})

export default RegisterPage;