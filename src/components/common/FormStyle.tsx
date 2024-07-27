interface FormStyleProps {
    children: React.ReactNode
}

export default function FormStyle({ children }: FormStyleProps) {

    const formStyle: React.CSSProperties = {
        backgroundColor: 'white',
        padding: '16px 48px 16px 16px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        margin: '16px',
        borderRadius: '8px'
    }
    return (
        <div style={formStyle}>
            {children}
        </div>
    )
}