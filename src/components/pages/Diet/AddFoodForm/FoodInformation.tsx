import { Food } from 'types'

interface FoodInformationProps {
    food: Food
    amount: number
}

export default function FoodInformation({ food, amount }: FoodInformationProps) {

    return (
        <ul>
            <li>Carboidrato: {(food.carbohydrate * amount).toFixed(1)}g</li>
            <li>Proteína: {(food.protein * amount).toFixed(1)}g</li>
            <li>Gordura: {(food.fat * amount).toFixed(1)}g</li>
            <li>Calorias: {(food.calories * amount).toFixed(1)}kcal</li>
        </ul>
    )

}