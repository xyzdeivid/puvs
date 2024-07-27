import InputContainer from 'components/common/InputContainer'
import Label from 'components/common/Label'

import { selectStyle } from 'styles'

const nutrientSources = ['Carboidrato', 'Proteína']

interface NutrientSourcesInputProps {
    setNutrientSource: React.Dispatch<React.SetStateAction<number>>
}

export default function NutrientSourcesInput({ setNutrientSource }: NutrientSourcesInputProps) {
    return (
        <InputContainer>
            <Label name='Fonte de Macronutriente' />
            <select onChange={e => setNutrientSource(Number(e.target.value))} style={selectStyle}>
                {
                    nutrientSources.map(source => {
                        return (
                            <option value={nutrientSources.indexOf(source)}>{source} </option>
                        )
                    })
                }
            </select>
        </InputContainer>
    )
}