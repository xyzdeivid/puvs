import FormContainer from 'components/common/Form/FormContainer'
import FormStyle from 'components/common/Form/FormStyle'
import SelectInput from 'components/common/Form/inputs/SelectInput'
import { useState } from 'react'

interface FoodOptionsFormProps {
    setFoodOptionsForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FoodOptionsForm({ setFoodOptionsForm }: FoodOptionsFormProps) {

    const [source, setSource] = useState('')

    return (
        <FormContainer setShowForm={setFoodOptionsForm}>
            <FormStyle>
                <form>
                    <SelectInput
                        labelText='Fonte'
                        optionsName={[['carbohydrate', 'Carboidratos'], ['protein', 'Proteínas']]}
                        setValue={setSource}
                    />
                </form>
            </FormStyle>
        </FormContainer>
    )

}