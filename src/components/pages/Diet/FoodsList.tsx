import { Foods } from 'types'
import List from './FoodsList/List'
import CentralInformation from './FoodsList/CentralInformation'

interface FoodsListProps {
    dietFoods: Foods
}

export default function FoodsList({ dietFoods }: FoodsListProps) {

    

    return (
        <div>
            <List dietFoods={dietFoods} />
            <CentralInformation />
            <hr style={{ margin: '16px 0' }} />
        </div>
    )

}