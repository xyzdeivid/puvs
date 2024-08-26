import { ReactNode } from 'react'

import { mainColor } from 'styles'

interface InputContainerProps {
    labelText: string
    children: ReactNode
}

export default function InputContainer({ labelText, children }: InputContainerProps) {
    return (
        <div style={{ marginBottom: '16px' }}>
            <label style={{ color: mainColor, marginRight: '4px' }}>{labelText}:</label>
            {children}
        </div>
    )
}