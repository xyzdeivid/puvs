import InputContainer from 'components/common/InputContainer'
import Label from 'components/common/Label'

export default function ProtInput() {
    return (
        <InputContainer>
            <Label name='Proteína (g)' />
            <input type='number' required />
        </InputContainer>
    )
}