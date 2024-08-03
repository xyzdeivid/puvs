import { useState } from 'react'

import { foods } from 'types'

import Container from 'components/common/Container'
import OpenFormButton from 'components/common/OpenFormButton'
import Foods from 'components/pages/Diet/Foods'
import FoodForm from 'components/pages/Diet/FoodForm'

export default function Diet() {

    const [showFoodForm, setShowFoodForm] = useState(false)
    const [foods, setFoods] = useState<foods>([])

    return (
        <Container>
            <OpenFormButton
                setShowForm={setShowFoodForm}
                buttonText='Adicionar Alimento'
            />
            {
                showFoodForm
                    ? <FoodForm setFoods={setFoods} setShowFoodForm={setShowFoodForm} />
                    : null
            }
            {
                foods[0]
                    ? <Foods foods={foods} />
                    : null
            }
        </Container>
    )
}