export function closeForm(e: React.MouseEvent<HTMLDivElement, MouseEvent>, formRef: React.MutableRefObject<null>, setShowForm: React.Dispatch<React.SetStateAction<boolean>>) {
    if (formRef.current) {
        if (e.target === formRef.current) {
            setShowForm(false)
        }
    }
}