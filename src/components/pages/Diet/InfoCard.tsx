import { Food } from 'types'

import PopUpContainer from 'components/common/PopUpContainer'

interface InfoCardProps {
    food: Food
    setShowInfoCard: React.Dispatch<React.SetStateAction<boolean>>
}

const InfoCard = ({ food, setShowInfoCard }: InfoCardProps) => {

    const infoCardStyle: React.CSSProperties = {
        backgroundColor: 'white',
        border: '1px solid black',
        padding: '12px'
    }

    const listStyle: React.CSSProperties = {
        marginBottom: '4px'
    }

    return (
        <PopUpContainer setShowForm={setShowInfoCard}>
            <ul style={infoCardStyle}>
                <li style={listStyle}>Nome: {food.name}</li>
                <li style={listStyle}>Quantidade: {food.amount}g</li>
                <li style={listStyle}>Carboidrato: {(food.carbohydrate).toFixed(1)}g</li>
                <li style={listStyle}>Proteína: {(food.protein).toFixed(1)}g</li>
                <li style={listStyle}>Gordura: {(food.fat).toFixed(1)}g</li>
                <li style={listStyle}>Caloria: {(food.calories).toFixed(1)}kcal</li>
            </ul>
        </PopUpContainer>
    )

}

export default InfoCard