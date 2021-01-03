import React from 'react'
import { createComponent } from 'react-fela'

import ComorbidityBar from 'components/ComorbidityBar'
import SymptomsPie from 'components/SymptomsPie'
import MortalityAgesHistogram from 'components/MortalityAgesHistogram'
import styles from './styles'

const Wrapper = createComponent(styles.wrapper, 'div')
const Box = createComponent(styles.box, 'div')
const BoxItem = createComponent(styles.boxItem, 'div')
const Chart = createComponent(styles.chart, 'div')

const Dashboard = () => {
    return (
        <Wrapper>
            <Box>
                <BoxItem>
                    <h2>Comorbilidad</h2>
                    <Chart>
                        <ComorbidityBar />
                    </Chart>
                </BoxItem>
                <BoxItem>
                    <h2>Síntomas</h2>
                    <Chart>
                        <SymptomsPie />
                    </Chart>
                </BoxItem>
                <BoxItem>
                    <h2>Mortalidad por Edad</h2>
                    <Chart>
                        <MortalityAgesHistogram />
                    </Chart>
                </BoxItem>
            </Box>
        </Wrapper>
    )
}

export default Dashboard
