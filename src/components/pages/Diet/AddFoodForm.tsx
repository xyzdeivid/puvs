import FormContainer from 'components/common/Form/FormContainer'
import FormStyle from 'components/common/Form/FormStyle'
import SourceInput from './AddFoodForm/SourceInput'

interface AddFoodFormProps {
    setShowAddFoodForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddFoodForm({ setShowAddFoodForm }: AddFoodFormProps) {

    return (
        <FormContainer setShowForm={setShowAddFoodForm}>
            <FormStyle>
                <form>
                    <SourceInput />
                </form>
            </FormStyle>
        </FormContainer>
    )

}