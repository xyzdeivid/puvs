import { food } from 'types'

import { mainColor } from 'styles'

interface FoodInfoProps {
    food: food
}

export default function FoodInfo({ food }: FoodInfoProps) {

    function hasDecimal(number: number) {
        return number % 1 !== 0
            ? number.toFixed(1)
            : number
    }

    return (
        <ul style={{ marginTop: '16px' }}>
            <li><span style={{ color: mainColor, fontWeight: 'bolder' }}>Carboidratos:</span> {hasDecimal(food.carbohydrate)}g</li>
            <li><span style={{ color: mainColor, fontWeight: 'bolder' }}>Proteínas:</span> {hasDecimal(food.protein)}g</li>
            <li><span style={{ color: mainColor, fontWeight: 'bolder' }}>Gorduras:</span> {hasDecimal(food.fat)}g</li>
            <li><span style={{ color: mainColor, fontWeight: 'bolder' }}>Calorias:</span> {hasDecimal(food.calories)}g</li>
        </ul>
    )

}