import FormContainer from 'components/common/Form/FormContainer'
import FormStyle from 'components/common/Form/FormStyle'
import SourceInput from './AddFoodForm/SourceInput'
import { useState } from 'react'

interface AddFoodFormProps {
    setShowAddFoodForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddFoodForm({ setShowAddFoodForm }: AddFoodFormProps) {

    const [source, setSource] = useState('carbo')

    return (
        <FormContainer setShowForm={setShowAddFoodForm}>
            <FormStyle>
                <form>
                    <SourceInput setSource={setSource} />
                </form>
            </FormStyle>
        </FormContainer>
    )

}