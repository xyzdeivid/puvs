import InputContainer from 'components/common/Form/inputs/InputContainer'
import Label from 'components/common/Label'

import { carbohydrates, proteins } from 'foods'

import { selectStyle } from 'styles'

interface FoodOptionsInputProps {
    source: string
}

export default function FoodOptionsInput({ source }: FoodOptionsInputProps) {

    function selectSource() {
        if (source === 'carbohydrate') {
            return (
                carbohydrates.map((food => {
                    return (
                        <option>{food.name}</option>
                    )
                }))
            )
        } else if (source === 'protein') {
            return (
                proteins.map((food) => {
                    return (
                        <option>{food.name}</option>
                    )
                })
            )
        }
    }

    return (
        <InputContainer>
            <Label name='Alimento' />
            <select style={selectStyle}>
                {selectSource()}
            </select>
        </InputContainer>
    )

}