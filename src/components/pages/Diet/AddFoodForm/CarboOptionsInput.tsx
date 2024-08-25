import { carbohydrates } from 'foods'
import { useEffect } from 'react'

import { selectStyle } from 'styles'

import { Food } from 'types'

interface CarboOptionsInputProps {
    setDefaultFood: (food: Food) => void
}

export default function CarboOptions({ setDefaultFood }: CarboOptionsInputProps) {

    useEffect(() => {
        setDefaultFood(carbohydrates[0])
    }, [setDefaultFood])

    return (
            <select style={selectStyle}>
                {carbohydrates.map(food => {
                    return (
                        <option>{food.name}</option>
                    )
                })}
            </select>
    )

}