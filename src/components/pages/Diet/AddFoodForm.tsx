import { useState, useCallback } from 'react'

import { Foods, Food } from 'types'

import PopUpContainer from 'components/common/PopUpContainer'
import FormStyle from 'components/common/Form/FormStyle'
import SourceInput from 'components/pages/Diet/AddFoodForm/SourceInput'
import FoodOptionsInput from 'components/pages/Diet/AddFoodForm/FoodOptionsInput'
import AmountInput from 'components/pages/Diet/AddFoodForm/AmountInput'
import FoodInformation from 'components/pages/Diet/AddFoodForm/FoodInformation'
import FormConfirmButton from 'components/common/Form/FormConfirmButton'

interface AddFoodFormProps {
    setDietFoods: React.Dispatch<React.SetStateAction<Foods>>
    setShowAddFoodForm: React.Dispatch<React.SetStateAction<boolean>>
}

const AddFoodForm = ({ setDietFoods, setShowAddFoodForm }: AddFoodFormProps) => {

    const [source, setSource] = useState('carbo')
    const [food, setFood] = useState({} as Food)
    const [amount, setAmount] = useState(100)

    const setDefaultFood = useCallback((food: Food) => {
        setFood(food)
    }, [])

    const createFood = () => {
        const createdFood: Food = {
            name: food.name,
            amount: amount,
            carbohydrate: food.carbohydrate * amount,
            protein: food.protein * amount,
            fat: food.fat * amount,
            calories: food.calories * amount
        }
        setDietFoods(prev => [...prev, createdFood])
    }

    return (
        <PopUpContainer setShowForm={setShowAddFoodForm}>
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
        </PopUpContainer>
    )

}

export default AddFoodForm