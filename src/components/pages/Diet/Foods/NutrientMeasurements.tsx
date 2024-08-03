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
            <li><span style={{ fontWeight: 'bolder' }}>Carboidratos:</span> {carboMeasurement()}g</li>
            <li><span style={{ fontWeight: 'bolder' }}>Proteínas:</span> {protMeasurement()}g</li>
            <li><span style={{ fontWeight: 'bolder' }}>Gorduras:</span> {fatMeasurement()}g</li>
        </ul>
    )

}