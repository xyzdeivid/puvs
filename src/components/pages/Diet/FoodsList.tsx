import { foods } from 'types'

interface DietFoodsProps {
    foods: foods
}

export default function DietFoods({ foods }: DietFoodsProps) {

    return (
        <ul style={{ listStyle: 'none' }}>
            {foods.map(food => {
                return (
                    <li>{food.name}</li>
                )
            })}
        </ul>
    )

}