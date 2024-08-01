import { mainGradiente, mainColor } from 'styles'

interface InfoProps {
    index: string
    text: string
}

export default function Info({ index, text }: InfoProps) {

    const listStyle: React.CSSProperties = {
        background: mainGradiente,
        color: 'white',
        padding: '8px',
        borderRadius: '4px',
        marginBottom: '8px',
        position: 'relative',
        borderBottom: `1px solid ${mainColor}`,
    }
    return (
        <h4 style={listStyle}>{index}: <span style={{ fontWeight: 'lighter' }}>{text}</span></h4>
    )
}