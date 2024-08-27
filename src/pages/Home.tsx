import { useState } from 'react'

import Container from 'components/pages/Home/Container'
import About from 'components/pages/Home/About'
import Form from 'components/pages/Home/Form'
import OpenFormButton from 'components/common/OpenFormButton'

const Home = () => {

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

export default Home