import { useState } from 'react'

import FormStyle from 'components/common/FormStyle'
import FoodNameInput from './FoodFormComponents/FoodNameInput'
import NumberInput from './FoodFormComponents/NumberInput'
import ConfirmButton from 'components/common/Form/ConfirmButton'

import { formcontainerStyle } from 'styles'

import { foods } from 'types'

interface FoodFormProps {
    setFoods: React.Dispatch<React.SetStateAction<foods>>
    setShowFoodForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FoodForm({ setFoods, setShowFoodForm }: FoodFormProps) {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const [carbo, setCarbo] = useState(0)
    const [prot, setProt] = useState(0)
    const [fat, setFat] = useState(0)
    const [calories, setCalories] = useState(0)

    function createFood() {
        const food = {
            name,
            amount,
            carbo,
            prot,
            fat,
            calories
        }
        setFoods(prev => [...prev, food])
        setShowFoodForm(false)
    }

    return (
        <div style={formcontainerStyle}>
            <FormStyle>
                <form onSubmit={e => {
                    e.preventDefault()
                    createFood()
                }}>
                    <FoodNameInput setFoodName={setName} />
                    <NumberInput
                        labelText='Quantidade (g)'
                        setValue={setAmount}
                    />
                    <hr />
                    <NumberInput
                        labelText='Carboidrato (g)'
                        setValue={setCarbo}
                    />
                    <NumberInput
                        labelText='Proteína (g)'
                        setValue={setProt}
                    />
                    <NumberInput
                        labelText='Gordura (g)'
                        setValue={setFat}
                    />
                    <NumberInput
                        labelText='Calorias (kcal)'
                        setValue={setCalories}
                    />
                    <ConfirmButton text='Registrar' />
                </form>
            </FormStyle>
        </div>
    )
}