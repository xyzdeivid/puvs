import { useState } from 'react'

import Container from 'components/common/Container'
import About from 'components/Home/About'
import Form from 'components/Home/Form'
import OpenFormButton from 'components/common/OpenFormButton'

export default function Home() {

    const [showForm, setShowForm] = useState(false)

    const versionStyle: React.CSSProperties = {
        position: 'fixed',
        bottom: 0,
        right: 0,
        padding: '4px'
    }

    return (
        <>
            <Container>
                <About />
                <OpenFormButton setShowForm={setShowForm} buttonText='Descubra!' />
                {
                    showForm
                        ? <Form setShowForm={setShowForm} />
                        : null
                }
            </Container>
            <span style={versionStyle}>1.1.0</span>
        </>
    )
}