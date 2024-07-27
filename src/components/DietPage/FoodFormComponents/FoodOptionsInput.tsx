import InputContainer from 'components/common/InputContainer'
import Label from 'components/common/Label'
import foods from 'foods'

import { selectStyle } from 'styles'

interface FoodOptionsInputProps {
    nutrientSource: number
}

export default function FoodOptionsInput({ nutrientSource }: FoodOptionsInputProps) {

    return (
        <InputContainer>
            <Label name='Alimento' />
            <select style={selectStyle}>
                {foods[nutrientSource].map(food => {
                    return (
                        <option>{food.name}</option>
                    )
                })}
            </select>
        </InputContainer>
    )

}