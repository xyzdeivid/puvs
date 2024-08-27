import { Food, Foods } from 'types'
import List from './FoodsList/List'
import CentralInformation from './FoodsList/CentralInformation'

interface FoodsListProps {
    dietFoods: Foods
    setSelectedFood: React.Dispatch<React.SetStateAction<Food>>
    setShowInfoCard: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FoodsList({ dietFoods, setSelectedFood, setShowInfoCard }: FoodsListProps) {

    return (
        <div>
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