import { useCallback, useState } from 'react'

import { Food } from 'types'

import FormContainer from 'components/common/Form/FormContainer'
import FormStyle from 'components/common/Form/FormStyle'
import SourceInput from './AddFoodForm/SourceInput'
import FoodOptionsInput from './AddFoodForm/FoodOptionsInput'
import FoodInformation from './AddFoodForm/FoodInformation'
import AmountInput from './AddFoodForm/AmountInput'

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

    return (
        <FormContainer setShowForm={setShowAddFoodForm}>
            <FormStyle>
                <form>
                    <SourceInput setSource={setSource} />
                    <FoodOptionsInput
                        source={source}
                        setDefaultFood={setDefaultFood}
                        setFood={setFood}
                    />
                    <AmountInput amount={amount} />
                    <FoodInformation food={food} amount={amount} />
                </form>
            </FormStyle>
        </FormContainer>
    )

}