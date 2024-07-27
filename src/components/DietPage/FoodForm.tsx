import NutrientSourcesInput from './FoodFormComponents/NutrientSourcesInput'

import { formcontainerStyle, formStyle } from 'styles'

export default function FoodForm() {

    return (
        <div style={formcontainerStyle}>
            <div style={formStyle}>
                <form>
                    <NutrientSourcesInput />
                </form>
            </div>
        </div>
    )
}