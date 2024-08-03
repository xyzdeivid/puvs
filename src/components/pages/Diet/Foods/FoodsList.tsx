import { foods } from 'types'

interface DietFoodsProps {
    foods: foods
}

export default function DietFoods({ foods }: DietFoodsProps) {

    return (
        <ul>
            {foods.map(food => {
                return (
                    <li>{food.name}</li>
                )
            })}
        </ul>
    )

}