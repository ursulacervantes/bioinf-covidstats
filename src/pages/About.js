import React from 'react'

import IntroBanner from 'components/IntroBanner'
import Team from 'components/Team'

const props = {
    titlePrimary: 'Acerca del proyecto',
    content: `La información que presentamos busca ayudar a entender el
    comportamiento/sintomatología de la enfermedad de los pacientes en el Perú.`
}

const About = () => {
    return (
        <>
            <IntroBanner {...props} />
            <Team />
        </>
    )
}

export default About