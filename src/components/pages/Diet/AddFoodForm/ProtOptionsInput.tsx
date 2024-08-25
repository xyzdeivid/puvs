import { useEffect } from 'react'

import { proteins } from 'foods'

import { selectStyle } from 'styles'

import { Food } from 'types'

interface ProtOptionsInputProps {
    setDefaultFood: (food: Food) => void
}

export default function ProtOptionsInput({ setDefaultFood }: ProtOptionsInputProps) {

    useEffect(() => {
        setDefaultFood(proteins[0])
    }, [setDefaultFood])

    return (
            <select style={selectStyle}>
                {proteins.map(food => {
                    return (
                        <option>{food.name}</option>
                    )
                })}
            </select>
    )

}