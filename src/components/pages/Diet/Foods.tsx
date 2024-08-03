import { foods } from 'types'

import FoodsList from 'components/pages/Diet/Foods/FoodsList'
import NutrientMeasurements from 'components/pages/Diet/Foods/NutrientMeasurements'

interface FoodsProps {
    foods: foods
}

export default function Foods({ foods }: FoodsProps) {

    return (
        <div style={{ margin: '16px' }}>
            <h3 style={{ marginBottom: '2px' }}>Lista de alimentos</h3>
            <FoodsList foods={foods} />
            <hr style={{ margin: '8px' }} />
            <NutrientMeasurements foods={foods} />
        </div>
    )

}