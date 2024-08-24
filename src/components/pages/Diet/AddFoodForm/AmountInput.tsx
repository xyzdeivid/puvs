import InputContainer from 'components/common/Form/inputs/InputContainer'
import Label from 'components/common/Label'
import { numberInputStyle } from 'styles'

export default function AmountInput() {

    return (
        <InputContainer>
            <Label name='Quantidade' />
            <input style={numberInputStyle} type='number' />
        </InputContainer>
    )

}