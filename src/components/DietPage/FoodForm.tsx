import { useState } from 'react'

import FormContainer from 'components/common/Form/FormContainer'
import FormStyle from 'components/common/Form/FormStyle'
import TextInput from 'components/common/Form/TextInput'
import NumberInput from 'components/common/Form/NumberInput'
import ConfirmButton from 'components/common/Form/FormConfirmButton'

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
        <FormContainer setShowForm={setShowFoodForm}>
            <FormStyle>
                <form onSubmit={e => {
                    e.preventDefault()
                    createFood()
                }}>
                    <TextInput labelText='Nome' setValue={setName} />
                    <NumberInput
                        labelText='Quantidade (g)'
                        setValue={setAmount}
                    />
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
        </FormContainer>
    )
}