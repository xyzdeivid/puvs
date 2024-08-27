import { Food } from 'types'

interface FoodInformationProps {
    food: Food
    amount: number
}

const FoodInformation = ({ food, amount }: FoodInformationProps) => {

    function checkFractionDigit(number: number) {
        return number % 1 !== 0
        ? number.toFixed(1)
        : number.toFixed(0)
    }

    return (
        <ul>
            <li>Carboidrato: {checkFractionDigit(food.carbohydrate * amount)}g</li>
            <li>Proteína: {checkFractionDigit(food.protein * amount)}g</li>
            <li>Gordura: {checkFractionDigit(food.fat * amount)}g</li>
            <li>Calorias: {checkFractionDigit(food.calories * amount)}kcal</li>
        </ul>
    )

}

export default FoodInformation