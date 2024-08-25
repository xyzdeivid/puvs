import { Food } from 'types'

interface FoodInformationProps {
    food: Food
}

export default function FoodInformation({ food }: FoodInformationProps) {

    return (
        <ul>
            <li>Carboidrato: {food.carbohydrate}</li>
            <li>Proteína: {food.protein}</li>
            <li>Gordura: {food.fat}</li>
            <li>Calorias: {food.calories}</li>
        </ul>
    )

}