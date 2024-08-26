import { useEffect } from 'react'

import { proteins } from 'foods'

import { selectStyle } from 'styles'

import { Food } from 'types'

interface ProtOptionsInputProps {
    setDefaultFood: (food: Food) => void
    setFood: React.Dispatch<React.SetStateAction<Food>>
}

export default function ProtOptionsInput({ setDefaultFood, setFood }: ProtOptionsInputProps) {

    useEffect(() => {
        setDefaultFood(proteins[0])
    }, [setDefaultFood])

    return (
            <select onChange={e => setFood(JSON.parse(e.target.value))} style={selectStyle}>
                {proteins.map(food => {
                    return (
                        <option value={JSON.stringify(food)} key={food.name}>{food.name}</option>
                    )
                })}
            </select>
    )

}