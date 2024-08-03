import { useState } from 'react'

import { foods } from 'types'

import Container from 'components/common/Container'
import FoodForm from 'components/pages/Diet/FoodForm'
import OpenFormButton from 'components/common/OpenFormButton'

export default function Diet() {

    const [showFoodForm, setShowFoodForm] = useState(false)
    const [foods, setFoods] = useState<foods>([])

    return (
        <Container>
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
        </Container>
    )
}