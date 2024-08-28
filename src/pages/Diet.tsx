import { useState } from 'react'

import { Foods, Food } from 'types'

import Container from 'components/common/Container'
import FoodsList from 'components/pages/Diet/FoodsList'
import InfoCard from 'components/pages/Diet/InfoCard'
import OpenFormButton from 'components/common/OpenFormButton'
import AddFoodForm from 'components/pages/Diet/AddFoodForm'

const Diet = () => {

    const [dietFoods, setDietFoods] = useState<Foods>([])
    const [showInfoCard, setShowInfoCard] = useState(false)
    const [selectedFood, setSelectedFood] = useState({} as Food)
    const [showAddFoodForm, setShowAddFoodForm] = useState(false)

    return (
        <Container>
            {
                dietFoods[0]
                    ? <FoodsList
                        dietFoods={dietFoods}
                        setSelectedFood={setSelectedFood}
                        setShowInfoCard={setShowInfoCard}
                    />
                    : null
            }
            {
                showInfoCard
                    ? <InfoCard food={selectedFood} setShowInfoCard={setShowInfoCard} />
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

export default Diet