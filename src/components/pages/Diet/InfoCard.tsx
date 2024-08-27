import PopUpContainer from 'components/common/PopUpContainer'

import { Food } from 'types'

interface InfoCardProps {
    food: Food
    setShowInfoCard: React.Dispatch<React.SetStateAction<boolean>>
}

export default function InfoCard({ food, setShowInfoCard }: InfoCardProps) {

    const infoCardStyle: React.CSSProperties = {
        backgroundColor: 'white',
        border: '1px solid black',
        padding: '16px'
    }

    return (
        <PopUpContainer setShowForm={setShowInfoCard}>
            <ul style={infoCardStyle}>
                <li>Nome: {food.name}</li>
                <li>Quantidade: {food.amount}g</li>
                <li>Carboidrato: {(food.carbohydrate).toFixed(1)}g</li>
                <li>Proteína: {(food.protein).toFixed(1)}g</li>
                <li>Gordura: {(food.fat).toFixed(1)}g</li>
                <li>Caloria: {(food.calories).toFixed(1)}kcal</li>
            </ul>
        </PopUpContainer>
    )

}