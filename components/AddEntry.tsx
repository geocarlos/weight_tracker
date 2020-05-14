import React from 'react';
import { TextInput, Text, Button } from 'react-native';

interface IEntry {
    setPage: any
} 

const AddEntry = ({setPage}: IEntry) => {
    const [weight, setWeight] = React.useState<number>(0);

    return (
        <>
            <Text>
                Weight:
            </Text>
            <TextInput onChangeText={text => setWeight(Number(text))} />
            <Button title="Add" onPress={() => console.log(weight) } />
        </>
    )
}

export default AddEntry;