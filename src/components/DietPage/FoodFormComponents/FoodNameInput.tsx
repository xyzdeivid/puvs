import InputContainer from 'components/common/InputContainer'
import Label from 'components/common/Label'

interface FoodNameInputProps {
    setFoodName: React.Dispatch<React.SetStateAction<string>>
}

export default function FoodNameInput({ setFoodName }: FoodNameInputProps) {
    return (
        <InputContainer>
            <Label name='Nome' />
            <input onChange={e => setFoodName(e.target.value)} type='text' required />
        </InputContainer>
    )
}