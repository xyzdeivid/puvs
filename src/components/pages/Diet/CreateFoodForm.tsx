import { useState } from 'react'

import { food, foods } from 'types'

import FormContainer from 'components/common/Form/FormContainer'
import FormStyle from 'components/common/Form/FormStyle'
import TextInput from 'components/common/Form/inputs/TextInput'
import NumberInput from 'components/common/Form/inputs/NumberInput'
import ConfirmButton from 'components/common/Form/FormConfirmButton'

interface FoodFormProps {
    setFoods: React.Dispatch<React.SetStateAction<foods>>
    setShowFoodForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FoodForm({ setFoods, setShowFoodForm }: FoodFormProps) {

    const [name, setName] = useState('')
    const [carbohydrate, setCarbohydrate] = useState(0)
    const [protein, setProtein] = useState(0)
    const [fat, setFat] = useState(0)
    const [calories, setCalories] = useState(0)

    function createFood() {
        const food: food = {
            name,
            carbohydrate,
            protein,
            fat,
            calories
        }
        setFoods(prev => [...prev, food])
        setShowFoodForm(false)
    }

    return (
        <FormContainer setShowForm={setShowFoodForm}>
            <FormStyle>
                <form onSubmit={e => {
                    e.preventDefault()
                    createFood()
                }}>
                    <TextInput labelText='Nome' setValue={setName} />
                    <NumberInput
                        labelText='Carboidrato (g)'
                        setValue={setCarbohydrate}
                        step='0.1'
                    />
                    <NumberInput
                        labelText='Proteína (g)'
                        setValue={setProtein}
                        step='0.1'
                    />
                    <NumberInput
                        labelText='Gordura (g)'
                        setValue={setFat}
                        step='0.1'
                    />
                    <NumberInput
                        labelText='Calorias (kcal)'
                        setValue={setCalories}
                    />
                    <ConfirmButton text='Registrar' />
                </form>
            </FormStyle>
        </FormContainer>
    )
}