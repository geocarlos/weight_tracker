import WeightEntry from "./WeightEntry";

interface Person {
    id?: number,
    name: string,
    height: number,
    weights: Array<WeightEntry>
}

export default Person;