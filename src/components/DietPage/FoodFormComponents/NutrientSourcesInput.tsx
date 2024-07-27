import InputContainer from 'components/common/InputContainer'
import Label from 'components/common/Label'

import { selectStyle } from 'styles'

const nutrientSources = [['Carboidrato'], ['Proteína']]

export default function NutrientSourcesInput() {
    return (
        <InputContainer>
            <Label name='Fonte de Macronutriente' />
            <select style={selectStyle}>
                {
                    nutrientSources.map(source => {
                        return (
                            <option>{source} </option>
                        )
                    })
                }
            </select>
        </InputContainer>
    )
}