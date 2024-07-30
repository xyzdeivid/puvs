import { functions } from 'functions/user'

import { UserContext } from 'UserInfo'

import { useContext, useState } from 'react'
import FoodForm from 'components/DietPage/FoodForm'
import Foods from 'components/DietPage/Foods'
import OpenFormButton from 'components/common/OpenFormButton'

import { containerStyle } from 'styles'

import { foods } from 'types'

export default function DietPage() {

    const user = useContext(UserContext)
    const [weight] = user.weight
    const [heightWrong] = user.height
    const height = heightWrong / 100
    const [age] = user.age
    const [exerciseLevel] = user.exerciseLevel
    const [sex] = user.sex

    const [showFoodForm, setShowFoodForm] = useState(false)
    const [foods, setFoods] = useState<foods>([])

    const dailyCalorieExpenditure = functions(weight, height, age, exerciseLevel, sex).dailyCalorieExpenditure()

    return (
        <div style={containerStyle}>
            <div>
                <h4>Gasto calórico: {dailyCalorieExpenditure}kcal</h4>
                <h4>Calorias da dieta: </h4>
            </div>
            <div>
                <OpenFormButton
                    setShowForm={setShowFoodForm}
                    buttonText='Adicionar Alimento'
                />
            </div>
            {
                showFoodForm
                    ? <FoodForm setFoods={setFoods} setShowFoodForm={setShowFoodForm} />
                    : null
            }
            {
                foods[0]
                    ? <Foods />
                    : null
            }
        </div>
    )
}