import FormStyle from 'components/common/FormStyle'
import FoodNameInput from './FoodFormComponents/FoodNameInput'
import AmountInput from './FoodFormComponents/AmountInput'
import CarboInput from './FoodFormComponents/CarboInput'
import ProtInput from './FoodFormComponents/ProtInput'
import FatInput from './FoodFormComponents/FatInput'
import CaloriesInput from './FoodFormComponents/CaloriesInput'

import { formcontainerStyle } from 'styles'

export default function FoodForm() {

    return (
        <div style={formcontainerStyle}>
            <FormStyle>
                <form>
                    <FoodNameInput />
                    <AmountInput />
                    <hr />
                    <CarboInput />
                    <ProtInput />
                    <FatInput />
                    <CaloriesInput />
                </form>
            </FormStyle>
        </div>
    )
}