import { useRef } from 'react'

interface FormContainerProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
}

export default function FormContainer({ setShowForm, children }: FormContainerProps) {

    const formRef = useRef(null)

    function closeForm(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (formRef.current) {
            if (e.target === formRef.current) {
                setShowForm(false)
            }
        }
    }

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
        <div ref={formRef} onClick={e => closeForm(e)} style={formcontainerStyle}>
            {children}
        </div>
    )
}