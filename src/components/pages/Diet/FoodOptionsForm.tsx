import { useState } from 'react'

import Label from 'components/common/Label'
import NumberInput from 'components/common/Form/NumberInput'
import FormContainer from 'components/common/Form/FormContainer'
import FormStyle from 'components/common/Form/FormStyle'
import ConfirmButton from 'components/common/Form/FormConfirmButton'

interface FoodOptionsFormProps {
    setFoodOptionsForm: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FoodOptionsForm({ setFoodOptionsForm }: FoodOptionsFormProps) {

    const [amount, setAmount] = useState(0)

    return (
        <FormContainer setShowForm={setFoodOptionsForm}>
            <FormStyle>
                <form>
                    <Label name='Fonte' />
                    <select>
                        <option>Carboidratos</option>
                        <option>Proteínas</option>
                    </select>
                    <NumberInput labelText='Quantidade (g)' setValue={setAmount} />
                    <ConfirmButton text='Confirmar' />
                    <button>Criar Alimento Personalizado</button>
                </form>
            </FormStyle>
        </FormContainer>
    )

}