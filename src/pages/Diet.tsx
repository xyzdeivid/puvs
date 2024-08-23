import { useState } from 'react'

import Container from 'components/common/Container'
import OpenFormButton from 'components/common/OpenFormButton'
import AddFoodForm from 'components/pages/Diet/AddFoodForm'

export default function Diet() {

    const [showAddFoodForm, setShowAddFoodForm] = useState(false)

    return (
        <Container>
            <OpenFormButton buttonText='Adicionar Alimento' setShowForm={setShowAddFoodForm} />
            {
                showAddFoodForm
                ? <AddFoodForm setShowAddFoodForm={setShowAddFoodForm} />
                : null
            }
        </Container>
    )

}