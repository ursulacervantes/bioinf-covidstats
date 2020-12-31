import React from 'react'

import Banner from 'components/Banner'
import Team from 'components/Team'

const props = {
    titlePrimary: 'Acerca del proyecto',
    content: `La información que presentamos busca 
    ayudar a entender el comportamiento/sintomatología de la 
    enfermedad de los pacientes en el Perú.`
}

const About = () => {
    return (
        <div>
            <Banner {...props} />
            <Team />
        </div>
    )
}

export default About