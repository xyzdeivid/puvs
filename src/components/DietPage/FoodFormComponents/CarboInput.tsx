import InputContainer from 'components/common/InputContainer'
import Label from 'components/common/Label'

export default function CarboInput() {
    return (
        <InputContainer>
            <Label name='Carboidrato (g)' />
            <input type='number' />
        </InputContainer>
    )
}