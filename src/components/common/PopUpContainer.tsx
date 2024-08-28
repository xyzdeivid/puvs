import { useRef } from 'react'

interface PopUpContainerProps {
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
}

const PopUpContainer = ({ setShowForm, children }: PopUpContainerProps) => {

    const formRef = useRef(null)

    const closeForm = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (formRef.current) {
            if (e.target === formRef.current) {
                setShowForm(false)
            }
        }
    }

    const popUpContainerStyle: React.CSSProperties = {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh'
    }

    return (
        <div ref={formRef} onClick={e => closeForm(e)} style={popUpContainerStyle}>
            {children}
        </div>
    )
}

export default PopUpContainer