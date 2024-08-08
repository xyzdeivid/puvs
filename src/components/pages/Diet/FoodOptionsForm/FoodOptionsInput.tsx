import InputContainer from 'components/common/Form/inputs/InputContainer'
import Label from 'components/common/Label'

import { food } from 'types'

import { carbohydrates, proteins } from 'foods'

import { selectStyle } from 'styles'

interface FoodOptionsInputProps {
    source: string
    setFood: React.Dispatch<React.SetStateAction<food>>
}

export default function FoodOptionsInput({ source, setFood }: FoodOptionsInputProps) {

    function createFood(e: React.ChangeEvent<HTMLSelectElement>) {
        const food: food = JSON.parse(e.target.value)
        setFood(food)
    }

    function selectSource() {
        if (source === 'carbohydrate') {
            return (
                carbohydrates.map((food => {
                    return (
                        <option value={JSON.stringify(food)}>{food.name}</option>
                    )
                }))
            )
        } else if (source === 'protein') {
            return (
                proteins.map((food) => {
                    return (
                        <option value={JSON.stringify(food)}>{food.name}</option>
                    )
                })
            )
        }
    }

    return (
        <InputContainer>
            <Label name='Alimento' />
            <select style={selectStyle}
                onChange={e => createFood(e)}
            >
                {selectSource()}
            </select>
        </InputContainer>
    )

}