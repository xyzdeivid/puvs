import { useState } from 'react'

import { foods } from 'types'

import Container from 'components/common/Container'
import OpenFormButton from 'components/common/OpenFormButton'
import Foods from 'components/pages/Diet/Foods'
import FoodOptionsForm from 'components/pages/Diet/FoodOptionsForm'

export default function Diet() {

    const [showFoodOptionsForm, setFoodOptionsForm] = useState(false)
    const [foods, setFoods] = useState<foods>([])

    return (
        <Container>
            <OpenFormButton
                setShowForm={setFoodOptionsForm}
                buttonText='Adicionar Alimento'
            />
            {
                showFoodOptionsForm
                    ? <FoodOptionsForm setFoodOptionsForm={setFoodOptionsForm} />
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