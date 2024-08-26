import { useState } from 'react'

import { Foods } from 'types'

import Container from 'components/common/Container'
import OpenFormButton from 'components/common/OpenFormButton'
import AddFoodForm from 'components/pages/Diet/AddFoodForm'

export default function Diet() {

    const [showAddFoodForm, setShowAddFoodForm] = useState(false)
    const [dietFoods, setDietFoods] = useState<Foods>([])

    return (
        <Container>
            <OpenFormButton buttonText='Adicionar Alimento' setShowForm={setShowAddFoodForm} />
            {
                showAddFoodForm
                ? <AddFoodForm setDietFoods={setDietFoods} setShowAddFoodForm={setShowAddFoodForm} />
                : null
            }
        </Container>
    )

}