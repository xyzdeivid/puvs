import { useEffect } from 'react'

import { Food } from 'types'

import { carbohydrates } from 'foods'

import { selectStyle } from 'styles'

interface CarboOptionsInputProps {
    setDefaultFood: (food: Food) => void
    setFood: React.Dispatch<React.SetStateAction<Food>>
}

const CarboOptions = ({ setDefaultFood, setFood }: CarboOptionsInputProps) => {

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

export default CarboOptions