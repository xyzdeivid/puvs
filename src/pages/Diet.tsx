import { useState } from 'react'

import { Foods } from 'types'

import Container from 'components/common/Container'
import OpenFormButton from 'components/common/OpenFormButton'
import AddFoodForm from 'components/pages/Diet/AddFoodForm'
import FoodsList from 'components/pages/Diet/FoodsList'

export default function Diet() {

    const [showAddFoodForm, setShowAddFoodForm] = useState(false)
    const [dietFoods, setDietFoods] = useState<Foods>([])

    return (
        <Container>
            {
                dietFoods
                    ? <FoodsList dietFoods={dietFoods} />
                    : null
            }
            <OpenFormButton buttonText='Adicionar Alimento' setShowForm={setShowAddFoodForm} />
            {
                showAddFoodForm
                    ? <AddFoodForm setDietFoods={setDietFoods} setShowAddFoodForm={setShowAddFoodForm} />
                    : null
            }
        </Container>
    )

}