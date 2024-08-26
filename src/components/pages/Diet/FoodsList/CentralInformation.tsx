import { Foods } from 'types'

interface CentralInformationProps {
    dietFoods: Foods
}

export default function CentralInformation({ dietFoods }: CentralInformationProps) {

    function carboCounter() {
        const totalCarbo = dietFoods.reduce((acc, current) => {
            return acc + current.carbohydrate
        }, 0)
        return totalCarbo.toFixed(1)
    }

    function protCounter() {
        const totalProt = dietFoods.reduce((acc, current) => {
            return acc + current.protein
        }, 0)
        return totalProt.toFixed(1)
    }

    function fatCounter() {
        const totalFat = dietFoods.reduce((acc, current) => {
            return acc + current.fat
        }, 0)
        return totalFat.toFixed(1)
    }

    function caloriesCounter() {
        const totalCalories = dietFoods.reduce((acc, current) => {
            return acc + current.calories
        }, 0)
        return totalCalories.toFixed(1)
    }

    return (
        <ul style={{ fontSize: '14px' }}>
            <li><b>Carboidratos totais:</b> {carboCounter()}g</li>
            <li><b>Proteínas totais:</b> {protCounter()}g</li>
            <li><b>Gorduras totais:</b> {fatCounter()}g</li>
            <li><b>Calorias totais:</b> {caloriesCounter()}kcal</li>
        </ul>
    )

}