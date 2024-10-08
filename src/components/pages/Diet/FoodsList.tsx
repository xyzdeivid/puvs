import { Foods, Food } from 'types'

import List from 'components/pages/Diet/FoodsList/List'
import CentralInformation from 'components/pages/Diet/FoodsList/CentralInformation'

interface FoodsListProps {
    dietFoods: Foods
    setSelectedFood: React.Dispatch<React.SetStateAction<Food>>
    setShowInfoCard: React.Dispatch<React.SetStateAction<boolean>>
}

const FoodsList = ({ dietFoods, setSelectedFood, setShowInfoCard }: FoodsListProps) => {

    return (
        <div>
            <h3 style={{ textAlign: 'center', marginBottom: '8px' }}>Alimentos da dieta</h3>
            <List
                dietFoods={dietFoods}
                setSelectedFood={setSelectedFood}
                setShowInfoCard={setShowInfoCard}
            />
            <CentralInformation dietFoods={dietFoods} />
            <hr style={{ margin: '16px 0' }} />
        </div>
    )

}

export default FoodsList