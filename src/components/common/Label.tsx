import { mainColor } from 'styles'

interface LabelProps {
    name: string
}

export default function Label({ name }: LabelProps) {
    return (
        <label style={{ color: mainColor, marginRight: '4px' }}>{name}:</label>
    )
}