import { numberInputStyle } from 'styles'

import InputContainer from 'components/common/Form/inputs/InputContainer'
import Label from 'components/common/Label'

interface AmountInputProps {
    amount: number
}

export default function AmountInput({ amount }: AmountInputProps) {

    return (
        <InputContainer>
            <Label name='Quantidade (g)' />
            <input defaultValue={amount} style={numberInputStyle} type='number' />
        </InputContainer>
    )

}