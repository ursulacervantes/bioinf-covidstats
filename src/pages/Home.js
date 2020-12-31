import React from 'react'
import Banner from 'components/Banner'

const props = {
    titlePrimary: 'Caracterizando al COVID-19',
    titleSecondary: 'Herramienta de análisis de datos de pacientes del COVID-19 en el Perú',
    content: `Esta herramienta abarca diversas dimensiones de los pacientes hospitalizados 
    por COVID-19: enfermedades preexistentes, sintomatología, tratamiento y evolución del paciente, 
    además de datos demográficos (sexo, edad, lugar de residencia, ocupación, condición social y 
    económica, etc) y etnicidad. La información que presentamos busca ayudar a entender el 
    comportamiento/ sintomatología de la enfermedad de los pacientes en el Perú.`
}

const Home = () => {
    return (
        <Banner {...props} />
    )
}

export default Home