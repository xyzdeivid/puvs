import { useCallback, useEffect, useState } from 'react'

import { Food } from 'types'

import FormContainer from 'components/common/Form/FormContainer'
import FormStyle from 'components/common/Form/FormStyle'
import SourceInput from './AddFoodForm/SourceInput'
import InputContainer from 'components/common/Form/inputs/InputContainer'
import Label from 'components/common/Label'
import CarboOptionsInput from './AddFoodForm/CarboOptionsInput'
import ProtOptionsInput from './AddFoodForm/ProtOptionsInput'
import AmountInput from './AddFoodForm/AmountInput'

interface AddFoodFormProps {
    setShowAddFoodForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddFoodForm({ setShowAddFoodForm }: AddFoodFormProps) {

    const [source, setSource] = useState('carbo')
    const [food, setFood] = useState({} as Food)

    function sourceHandler() {
        if (source === 'carbo') {
            return <CarboOptionsInput setDefaultFood={setDefaultFood} />
        }
        if (source === 'prot') {
            return <ProtOptionsInput setDefaultFood={setDefaultFood} />
        }
    }

    const setDefaultFood = useCallback((food: Food) => {
        setFood(food)
    }, [])

    return (
        <FormContainer setShowForm={setShowAddFoodForm}>
            <FormStyle>
                <form>
                    <SourceInput setSource={setSource} />
                    <InputContainer>
                        <Label name='Alimento' />
                        {sourceHandler()}
                    </InputContainer>
                    <AmountInput />
                </form>
            </FormStyle>
        </FormContainer>
    )

}