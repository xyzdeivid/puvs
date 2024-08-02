import { mainColor } from 'styles'

export default function About() {
    return (
        <div style={{ marginBottom: '16px', padding: '8px' }}>
            <h1 style={{ marginBottom: '4px', color: mainColor }}>Sobre o PUVS</h1>
            <p>
                PUVS é um sistema que fornece algumas métricas para a saúde.
            </p>
            <p>
                São elas:
                IMC, estimativa de gasto calórico e sugestão de consumo de água.
            </p>
        </div>
    )
}