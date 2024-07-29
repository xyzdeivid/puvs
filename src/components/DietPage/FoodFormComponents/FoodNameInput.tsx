import InputContainer from 'components/common/InputContainer'
import Label from 'components/common/Label'

export default function FoodNameInput() {
    return (
        <InputContainer>
            <Label name='Nome' />
            <input type='text' required />
        </InputContainer>
    )
}