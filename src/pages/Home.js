import React from 'react'
import IntroBanner from 'components/IntroBanner'
import InfoBanner from 'components/InfoBanner'

const introBannerProps = {
    titlePrimary: 'Caracterizando al COVID-19',
    titleSecondary: 'Herramienta de análisis de datos de pacientes del COVID-19 en el Perú',
    content: `Esta herramienta abarca diversas dimensiones de los pacientes hospitalizados 
    por COVID-19: enfermedades preexistentes, sintomatología, tratamiento y evolución del paciente, 
    además de datos demográficos (sexo, edad, lugar de residencia, ocupación, condición social y 
    económica, etc) y etnicidad. La información que presentamos busca ayudar a entender el 
    comportamiento/ sintomatología de la enfermedad de los pacientes en el Perú.`
}

const infoBannerProps = {
    message: `Este trabajo fue financiado por el CONCYTEC-FONDECYT en el marco de la convocatoria 
    Proyectos Especiales: Respuesta al Covid Concurso 2020-01 [número de contrato 035-2020-FONDECYT]`
}

const Home = () => {
    return (
        <>
            <IntroBanner {...introBannerProps} />
            <InfoBanner {...infoBannerProps} />
        </>
    )
}

export default Home