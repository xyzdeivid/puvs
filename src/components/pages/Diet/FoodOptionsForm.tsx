import FormContainer from 'components/common/Form/FormContainer'
import FormStyle from 'components/common/Form/FormStyle'
import SelectInput from 'components/common/Form/inputs/SelectInput'

interface FoodOptionsFormProps {
    setFoodOptionsForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FoodOptionsForm({ setFoodOptionsForm }: FoodOptionsFormProps) {

    return (
        <FormContainer setShowForm={setFoodOptionsForm}>
            <FormStyle>
                <form>
                    <SelectInput
                        labelText='Fonte'
                        optionsName={['Carboidratos', 'Proteínas']}
                    />
                </form>
            </FormStyle>
        </FormContainer>
    )

}