import { useRef } from 'react'

import { closeForm } from 'functions/form'

interface FormContainerProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
}

export default function FormContainer({ setShowForm, children }: FormContainerProps) {
    const formRef = useRef(null)

    const formcontainerStyle: React.CSSProperties = {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh'
    }
    return (
        <div ref={formRef} onClick={e => closeForm(e, formRef, setShowForm)} style={formcontainerStyle}>
            {children}
        </div>
    )
}