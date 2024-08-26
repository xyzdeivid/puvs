import { Foods } from 'types'

interface FoodsListProps {
    dietFoods: Foods
}

export default function FoodsList({ dietFoods }: FoodsListProps) {

    return (
        <ul>
            {dietFoods.map(food => {
                return (
                    <li key={food.name}>{food.name}</li>
                )
            })}
        </ul>
    )

}