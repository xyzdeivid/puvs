import FormContainer from 'components/common/Form/FormContainer'
import FormStyle from 'components/common/Form/FormStyle'

interface AddFoodFormProps {
    setShowAddFoodForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddFoodForm({ setShowAddFoodForm }: AddFoodFormProps) {

    return (
        <FormContainer setShowForm={setShowAddFoodForm}>
            <FormStyle>
                <form>
                    <h1>Diet Form</h1>
                </form>
            </FormStyle>
        </FormContainer>
    )

}