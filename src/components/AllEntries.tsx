/**
 * Display all entries for the selected person
 */
import React from 'react';
import { View, Text, Button } from 'react-native';
import WeightEntry from 'src/model/WeightEntry';

interface IProps {
    entries: Array<WeightEntry>;
    setPage: any
}

const formatDate = (date: Date) => {
    const weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
    return `${weekDays[date.getDay()]}, ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

const AllEntries = ({ entries, setPage }: IProps) => {
    return (
        <View>
            <Button title="< Back" onPress={() => setPage('entry')} />
            {entries.map((entry: WeightEntry) => (
                <React.Fragment key={entry.date.toString()}>
                    <View>
                        <Text>
                            {formatDate(new Date(entry.date))}
                        </Text>
                        <Text>
                            {entry.weight} Kg
                        </Text>
                    </View>
                </React.Fragment>
            ))}
        </View>
    )
}

export default AllEntries;