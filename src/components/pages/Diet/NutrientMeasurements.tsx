import { foods } from 'types'

interface NutrientMeasurementsProps {
    foods: foods
}

export default function NutrientMeasurements({ foods }: NutrientMeasurementsProps) {

    function carboMeasurement() {
        return foods.reduce((prev, current) => {
            return prev + current.carbo
        }, 0)
    }

    function protMeasurement() {
        return foods.reduce((prev, current) => {
            return prev + current.prot
        }, 0)
    }

    function fatMeasurement() {
        return foods.reduce((prev, current) => {
            return prev + current.fat
        }, 0)
    }

    return (
        <ul>
            <li>Carboidratos: {carboMeasurement()}g</li>
            <li>Proteínas: {protMeasurement()}g</li>
            <li>Gorduras: {fatMeasurement()}g</li>
        </ul>
    )

}