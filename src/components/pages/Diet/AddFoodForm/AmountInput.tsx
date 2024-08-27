import { numberInputStyle } from 'styles'

import InputContainer from 'components/common/Form/inputs/InputContainer'

interface AmountInputProps {
    amount: number
    setAmount: React.Dispatch<React.SetStateAction<number>>
}

const AmountInput = ({ amount, setAmount }: AmountInputProps) => {

    return (
        <InputContainer labelText='Quantidade (g)'>
            <input onChange={e => setAmount(Number(e.target.value))} defaultValue={amount} style={numberInputStyle} type='number' />
        </InputContainer>
    )

}

export default AmountInput