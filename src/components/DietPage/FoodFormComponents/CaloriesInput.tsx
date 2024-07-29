import InputContainer from 'components/common/InputContainer'
import Label from 'components/common/Label'

export default function CaloriesInput() {
    return (
        <InputContainer>
            <Label name='Calorias (kcal)' />
            <input type='number' required />
        </InputContainer>
    )
}