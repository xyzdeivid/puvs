import { mainColor } from 'styles'

export default function Circle() {

    const circleStyle: React.CSSProperties = {
        width: '16px',
        height: '16px',
        boxShadow: `5px 5px 10px ${mainColor}`,
        position: 'absolute',
        top: '-26px',
        left: '-8px',
        borderRadius: '50%',
    }

    return (
        <div style={circleStyle}></div>
    )
    
}