import React from 'react';
import { TextInput, Text, Button, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addWeight } from '../actions/Actions';
import Person from 'src/model/Person';
import UserConfig from 'src/model/UserConfig';

interface IEntry {
    setPage: any,
    person: Person
} 

const AddEntry = ({setPage, person}: IEntry) => {
    const userConfig = useSelector<any, UserConfig | undefined>(state => state.appUser.user);
    const [weight, setWeight] = React.useState<number>(0);
    const dispatch = useDispatch();


    const addNewWeight = (weight: number) => {
        dispatch(addWeight({
            date: new Date(),
            weight
        }, person.id || 0, `http://10.0.2.2:3003/weight/${userConfig?.user.username}`));
    }

    return (
        <>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>
                    Weight:
                </Text>
                <TextInput style={{ borderBottomWidth: 1, width: '50%', textAlign: "center"}} onChangeText={text => setWeight(Number(text))} />
                <Button title="Add" onPress={() => addNewWeight(weight)} />
            </View>
            <View style={{ width: '100%', justifyContent: 'flex-end' }}>
                <Button title="< GO BACK" onPress={() => setPage('entry')} />
            </View>
        </>
    )
}

export default AddEntry;