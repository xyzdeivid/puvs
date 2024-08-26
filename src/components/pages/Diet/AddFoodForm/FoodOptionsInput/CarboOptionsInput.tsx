import { carbohydrates } from 'foods'
import { useEffect } from 'react'

import { selectStyle } from 'styles'

import { Food } from 'types'

interface CarboOptionsInputProps {
    setDefaultFood: (food: Food) => void
    setFood: React.Dispatch<React.SetStateAction<Food>>
}

export default function CarboOptions({ setDefaultFood, setFood }: CarboOptionsInputProps) {

    useEffect(() => {
        setDefaultFood(carbohydrates[0])
    }, [setDefaultFood])

    return (
            <select onChange={e => setFood(JSON.parse(e.target.value))} style={selectStyle}>
                {carbohydrates.map(food => {
                    return (
                        <option value={JSON.stringify(food)} key={food.name}>{food.name}</option>
                    )
                })}
            </select>
    )

}