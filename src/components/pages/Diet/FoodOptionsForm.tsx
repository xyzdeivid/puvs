import { useState } from 'react'

import FormContainer from 'components/common/Form/FormContainer'
import FormStyle from 'components/common/Form/FormStyle'
import StringSelectInput from 'components/common/Form/inputs/StringSelectInput'
import FoodOptionsInput from './FoodOptionsForm/FoodOptionsInput'
import NumberInput from 'components/common/Form/inputs/NumberInput'
import FoodInfo from './FoodOptionsForm/FoodInfo'

interface FoodOptionsFormProps {
    setFoodOptionsForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FoodOptionsForm({ setFoodOptionsForm }: FoodOptionsFormProps) {

    const [source, setSource] = useState('carbohydrate')
    const [amount, setAmount] = useState(100)

    return (
        <FormContainer setShowForm={setFoodOptionsForm}>
            <FormStyle>
                <form>
                    <StringSelectInput
                        labelText='Fonte'
                        optionsName={[['carbohydrate', 'Carboidratos'], ['protein', 'Proteínas']]}
                        setValue={setSource}
                    />
                    <FoodOptionsInput source={source} />
                    <NumberInput
                        labelText='Quantidade (g)'
                        setValue={setAmount}
                    />
                    <hr />
                    <FoodInfo />
                </form>
            </FormStyle>
        </FormContainer>
    )

}