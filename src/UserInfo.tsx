import { ReactNode, createContext, useState } from 'react'

type SetNumber = React.Dispatch<React.SetStateAction<number>>

interface User {
    weight: [number, SetNumber],
    height: [number, SetNumber],
    sex: [string, React.Dispatch<React.SetStateAction<string>>],
    age: [number, SetNumber],
    exerciseLevel: [number, SetNumber]
}

const DEFAULT_VALUE: User = {
    weight: [0, () => { }],
    height: [0, () => { }],
    sex: ['', () => { }],
    age: [0, () => { }],
    exerciseLevel: [0, () => { }]
}

export const UserContext = createContext(DEFAULT_VALUE)

interface UserProviderProps {
    children: ReactNode
}

export default function UserProvider({ children }: UserProviderProps) {

    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [sex, setSex] = useState('m')
    const [age, setAge] = useState(0)
    const [exerciseLevel, setExerciseLevel] = useState(0)

    const user: User = {
        weight: [weight, setWeight],
        height: [height, setHeight],
        sex: [sex, setSex],
        age: [age, setAge],
        exerciseLevel: [exerciseLevel, setExerciseLevel]
    }
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}