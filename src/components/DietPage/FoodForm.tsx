import { useState } from 'react'

import FormStyle from 'components/common/FormStyle'
import NutrientSourcesInput from './FoodFormComponents/NutrientSourcesInput'

import { formcontainerStyle } from 'styles'
import FoodOptionsInput from './FoodFormComponents/FoodOptionsInput'

export default function FoodForm() {

    const [nutrientSource, setNutrientSource] = useState(0)

    return (
        <div style={formcontainerStyle}>
            <FormStyle>
                <form>
                    <NutrientSourcesInput
                        setNutrientSource={setNutrientSource}
                    />
                    <FoodOptionsInput
                        nutrientSource={nutrientSource}
                    />
                </form>
            </FormStyle>
        </div>
    )
}