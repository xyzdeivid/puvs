import { Food, Foods } from 'types'

interface ListProps {
    dietFoods: Foods
    setSelectedFood: React.Dispatch<React.SetStateAction<Food>>
    setShowInfoCard: React.Dispatch<React.SetStateAction<boolean>>
}

const List = ({ dietFoods, setSelectedFood, setShowInfoCard }: ListProps) => {

    const listStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    const infoStyle: React.CSSProperties = {
        fontWeight: 'bolder',
        cursor: 'pointer'
    }


    return (
        <ul style={{ marginBottom: '12px' }}>
            {dietFoods.map(food => {
                return (
                    <li style={listStyle} key={food.name}>
                        <span style={{ marginRight: '8px' }}>{food.name}</span>
                        <span onClick={() => {
                            setSelectedFood(food)
                            setShowInfoCard(true)
                        }} style={infoStyle}>Info</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default List