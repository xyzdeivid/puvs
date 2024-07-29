import InputContainer from 'components/common/InputContainer'
import Label from 'components/common/Label'

export default function FatInput() {
    return (
        <InputContainer>
            <Label name='Gordura (g)' />
            <input type='number' />
        </InputContainer>
    )
}