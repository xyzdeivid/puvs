import { useState } from 'react'

import { foods } from 'types'

import { containerStyle } from 'styles'

import FoodForm from 'components/DietPage/FoodForm'
import OpenFormButton from 'components/common/OpenFormButton'

export default function Diet() {

    const [showFoodForm, setShowFoodForm] = useState(false)
    const [foods, setFoods] = useState<foods>([])

    return (
        <div style={containerStyle}>
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
        </div>
    )
}