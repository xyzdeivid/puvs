import Container from 'components/common/Container'
import OpenFormButton from 'components/common/OpenFormButton'
import { useState } from 'react'

export default function Diet() {

    const [showAddFoodForm, setShowAddFoodForm] = useState(false)

    return (
        <Container>
            <OpenFormButton buttonText='Adicionar Alimento' setShowForm={setShowAddFoodForm} />
        </Container>
    )

}