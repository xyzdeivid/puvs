import { useState } from 'react'

import { Food, Foods } from 'types'
import List from './FoodsList/List'
import CentralInformation from './FoodsList/CentralInformation'
import InfoCard from './FoodsList/InfoCard'

interface FoodsListProps {
    dietFoods: Foods
}

export default function FoodsList({ dietFoods }: FoodsListProps) {

    const [selectedFood, setSelectedFood] = useState({} as Food)
    const [showInfoCard, setShowInfoCard] = useState(false)

    return (
        <div>
            <List
                dietFoods={dietFoods}
                setSelectedFood={setSelectedFood}
                setShowInfoCard={setShowInfoCard}
            />
            {
                showInfoCard
                    ? <InfoCard food={selectedFood} />
                    : null
            }
            <CentralInformation dietFoods={dietFoods} />
            <hr style={{ margin: '16px 0' }} />
        </div>
    )

}