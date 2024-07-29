import InputContainer from 'components/common/InputContainer'
import Label from 'components/common/Label'

export default function AmountInput() {
    return (
        <InputContainer>
            <Label name='Quantidade (g)' />
            <input type='number' required />
        </InputContainer>
    )
}