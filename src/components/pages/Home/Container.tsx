import { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(255, 255, 255, 0.7)'
        }}>{children}</div>
    )
}

export default Container