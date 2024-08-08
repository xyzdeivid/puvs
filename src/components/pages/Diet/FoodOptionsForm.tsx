import { useEffect, useState } from 'react'

import FormContainer from 'components/common/Form/FormContainer'
import FormStyle from 'components/common/Form/FormStyle'
import StringSelectInput from 'components/common/Form/inputs/StringSelectInput'
import FoodOptionsInput from './FoodOptionsForm/FoodOptionsInput'
import NumberInput from 'components/common/Form/inputs/NumberInput'
import FoodInfo from './FoodOptionsForm/FoodInfo'
import { food } from 'types'
import { carbohydrates } from 'foods'

interface FoodOptionsFormProps {
    setFoodOptionsForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FoodOptionsForm({ setFoodOptionsForm }: FoodOptionsFormProps) {

    const [source, setSource] = useState('carbohydrate')
    const [amount, setAmount] = useState(100)
    const [food, setFood] = useState<food>(carbohydrates[0])

    useEffect(() => {
        const newFood: food = {
            name: food.name,
            carbohydrate: food.carbohydrate * amount,
            protein: food.protein * amount,
            fat: food.fat * amount,
            calories: food.calories * amount
        }
        setFood(newFood)
    }, [food, amount])

    return (
        <FormContainer setShowForm={setFoodOptionsForm}>
            <FormStyle>
                <form>
                    <StringSelectInput
                        labelText='Fonte'
                        optionsName={[['carbohydrate', 'Carboidratos'], ['protein', 'Proteínas']]}
                        setValue={setSource}
                    />
                    <FoodOptionsInput source={source} setFood={setFood} />
                    <NumberInput
                        labelText='Quantidade (g)'
                        setValue={setAmount}
                        value={amount}
                    />
                    <hr />
                    <FoodInfo />
                </form>
            </FormStyle>
        </FormContainer>
    )

}