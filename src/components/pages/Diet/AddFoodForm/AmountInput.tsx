import { numberInputStyle } from 'styles'

import InputContainer from 'components/common/Form/inputs/InputContainer'
import Label from 'components/common/Label'

interface AmountInputProps {
    amount: number
    setAmount: React.Dispatch<React.SetStateAction<number>>
}

export default function AmountInput({ amount, setAmount }: AmountInputProps) {

    return (
        <InputContainer>
            <Label name='Quantidade (g)' />
            <input onChange={e => setAmount(Number(e.target.value))} defaultValue={amount} style={numberInputStyle} type='number' />
        </InputContainer>
    )

}