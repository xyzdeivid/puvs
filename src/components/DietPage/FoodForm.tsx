import FormStyle from 'components/common/FormStyle'
import NutrientSourcesInput from './FoodFormComponents/NutrientSourcesInput'

import { formcontainerStyle } from 'styles'

export default function FoodForm() {

    return (
        <div style={formcontainerStyle}>
            <FormStyle>
                <form>
                    <NutrientSourcesInput />
                </form>
            </FormStyle>
        </div>
    )
}