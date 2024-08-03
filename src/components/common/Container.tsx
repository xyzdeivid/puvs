interface ContainerProps {
    children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
    const containerStyle: React.CSSProperties = {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div style={containerStyle}>
            {children}
        </div>
    )
}