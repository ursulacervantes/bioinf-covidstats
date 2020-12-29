import React from 'react'
import { createComponent } from 'react-fela'

import ComorbidityBar from 'components/ComorbidityBar'
import SymptomsPie from 'components/SymptomsPie'
import MortalityAgesHistogram from 'components/MortalityAgesHistogram'
import styles from './styles'

const Wrapper = createComponent(styles.wrapper, 'div')
const Box = createComponent(styles.box, 'div')
const BoxItem = createComponent(styles.boxItem, 'div')

const Dashboard = () => {
    return (
        <Wrapper>
            <Box>
                <BoxItem>
                    <h2>Comorbilidad</h2>
                    <ComorbidityBar />
                </BoxItem>
                <BoxItem>
                    <h2>Síntomas</h2>
                    <SymptomsPie />
                </BoxItem>
                <BoxItem>
                    <h2>Mortalidad por Edad</h2>
                    <MortalityAgesHistogram />
                </BoxItem>
            </Box>
        </Wrapper>
    )
}

export default Dashboard
