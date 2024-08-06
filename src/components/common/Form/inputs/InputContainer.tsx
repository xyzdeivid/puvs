import { ReactNode } from 'react'

interface InputContainerProps {
    children: ReactNode
}

export default function InputContainer({ children }: InputContainerProps) {
    return (
        <div style={{ marginBottom: '16px' }}>
            {children}
        </div>
    )
}