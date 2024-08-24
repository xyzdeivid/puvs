import InputContainer from 'components/common/Form/inputs/InputContainer'
import Label from 'components/common/Label'

import { selectStyle } from 'styles'

export default function SourceInput() {
    return (
        <InputContainer>
            <Label name='Fonte' />
            <select style={selectStyle}>
                <option>Carboidrato</option>
                <option>Proteína</option>
            </select>
        </InputContainer>
    )
}