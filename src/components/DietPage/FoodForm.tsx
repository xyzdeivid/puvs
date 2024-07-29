import { useState } from 'react'

import FormStyle from 'components/common/FormStyle'
import FoodNameInput from './FoodFormComponents/FoodNameInput'
import AmountInput from './FoodFormComponents/AmountInput'
import CarboInput from './FoodFormComponents/CarboInput'
import ProtInput from './FoodFormComponents/ProtInput'
import FatInput from './FoodFormComponents/FatInput'
import CaloriesInput from './FoodFormComponents/CaloriesInput'
import ConfirmButton from 'components/common/Form/ConfirmButton'

import { formcontainerStyle } from 'styles'

export default function FoodForm() {

    const [foodName, setFoodName] = useState('')
    const [amount, setAmount] = useState('')
    const [carbo, setCarbo] = useState('')
    const [prot, setProt] = useState('')
    const [fat, setFat] = useState('')
    const [calories, setCalories] = useState('')

    return (
        <div style={formcontainerStyle}>
            <FormStyle>
                <form>
                    <FoodNameInput setFoodName={setFoodName} />
                    <AmountInput />
                    <hr />
                    <CarboInput />
                    <ProtInput />
                    <FatInput />
                    <CaloriesInput />
                    <ConfirmButton text='Registrar' />
                </form>
            </FormStyle>
        </div>
    )
}