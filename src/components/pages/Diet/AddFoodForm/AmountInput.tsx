import { numberInputStyle } from 'styles'

import InputContainer from 'components/common/Form/inputs/InputContainer'
import Label from 'components/common/Label'

export default function AmountInput() {

    return (
        <InputContainer>
            <Label name='Quantidade (g)' />
            <input style={numberInputStyle} type='number' />
        </InputContainer>
    )

}