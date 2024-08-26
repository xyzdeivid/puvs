import { useCallback, useState } from 'react'

import { Food } from 'types'

import FormContainer from 'components/common/Form/FormContainer'
import FormStyle from 'components/common/Form/FormStyle'
import SourceInput from './AddFoodForm/SourceInput'
import FoodOptionsInput from './AddFoodForm/FoodOptionsInput'
import FoodInformation from './AddFoodForm/FoodInformation'
import AmountInput from './AddFoodForm/AmountInput'
import FormConfirmButton from 'components/common/Form/FormConfirmButton'

interface AddFoodFormProps {
    setShowAddFoodForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddFoodForm({ setShowAddFoodForm }: AddFoodFormProps) {

    const [source, setSource] = useState('carbo')
    const [food, setFood] = useState({} as Food)
    const [amount, setAmount] = useState(100)

    const setDefaultFood = useCallback((food: Food) => {
        setFood(food)
    }, [])

    function createFood() {
        const createdFood: Food = {
            name: food.name,
            carbohydrate: food.carbohydrate * amount,
            protein: food.protein * amount,
            fat: food.fat * amount,
            calories: food.calories * amount
        }
        console.log(createdFood)
    }

    return (
        <FormContainer setShowForm={setShowAddFoodForm}>
            <FormStyle>
                <form onSubmit={e => {
                    e.preventDefault()
                    createFood()
                    setShowAddFoodForm(false)
                }}>
                    <SourceInput setSource={setSource} />
                    <FoodOptionsInput
                        source={source}
                        setDefaultFood={setDefaultFood}
                        setFood={setFood}
                    />
                    <AmountInput amount={amount} setAmount={setAmount} />
                    <hr style={{ marginBottom: '16px' }} />
                    <FoodInformation food={food} amount={amount} />
                    <FormConfirmButton text='Confirmar' />
                </form>
            </FormStyle>
        </FormContainer>
    )

}