import InputContainer from 'components/common/Form/inputs/InputContainer'
import Label from 'components/common/Label'
import { selectStyle } from 'styles'
import { Foods } from 'types'

interface FoodOptionsProps {
    foods: Foods
}

export default function FoodOptions({ foods }: FoodOptionsProps) {

    return (
        <InputContainer>
            <Label name='Alimento' />
            <select style={selectStyle}>
                {foods.map(food => {
                    return (
                        <option>{food.name}</option>
                    )
                })}
            </select>
        </InputContainer>
    )

}