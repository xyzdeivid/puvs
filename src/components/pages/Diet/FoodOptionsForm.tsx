import { useState } from 'react'

import { carbohydrates } from 'foods'

import { food } from 'types'

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
    const [food, setFood] = useState<food>(setDefaultFood())

    function setDefaultFood() {
        const defaultOption: food = {
            name: carbohydrates[0].name,
            carbohydrate: carbohydrates[0].carbohydrate * amount,
            protein: carbohydrates[0].protein * amount,
            fat: carbohydrates[0].fat * amount,
            calories: carbohydrates[0].calories * amount
        }
        return defaultOption
    }

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
                        value={amount}
                    />
                    <hr />
                    <FoodInfo food={food} />
                </form>
            </FormStyle>
        </FormContainer>
    )

}