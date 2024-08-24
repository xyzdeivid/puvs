import FormContainer from 'components/common/Form/FormContainer'
import FormStyle from 'components/common/Form/FormStyle'
import SourceInput from './AddFoodForm/SourceInput'
import { useEffect, useState } from 'react'
import { carbohydrates, proteins } from 'foods'
import FoodOptions from './AddFoodForm/FoodOptions'

interface AddFoodFormProps {
    setShowAddFoodForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddFoodForm({ setShowAddFoodForm }: AddFoodFormProps) {

    const [source, setSource] = useState('carbo')
    const [foods, setFoods] = useState(carbohydrates)

    useEffect(() => {
        if (source === 'carbo') {
            setFoods(carbohydrates)
        }
        if (source === 'prot') {
            setFoods(proteins)
        }
    }, [source])

    return (
        <FormContainer setShowForm={setShowAddFoodForm}>
            <FormStyle>
                <form>
                    <SourceInput setSource={setSource} />
                    <FoodOptions foods={foods} />
                </form>
            </FormStyle>
        </FormContainer>
    )

}