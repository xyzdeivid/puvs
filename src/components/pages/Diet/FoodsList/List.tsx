import { Foods } from 'types'

interface ListProps {
    dietFoods: Foods
}

export default function List({ dietFoods }: ListProps) {

    const listStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    const infoStyle: React.CSSProperties = {
        fontWeight: 'bolder'
    }


    return (
        <ul style={{ marginBottom: '12px' }}>
            {dietFoods.map(food => {
                return (
                    <li style={listStyle} key={food.name}>
                        <span style={{ marginRight: '8px' }}>{food.name}</span>
                        <span style={infoStyle}>Info</span>
                    </li>
                )
            })}
        </ul>
    )
}