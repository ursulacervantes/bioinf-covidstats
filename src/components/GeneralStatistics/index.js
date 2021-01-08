import React from 'react'
import { createComponent } from 'react-fela'

import ComorbidityBar from 'components/ComorbidityBar'
import SymptomsPie from 'components/SymptomsPie'
import MortalityAgesHistogram from 'components/MortalityAgesHistogram'
import DateRangePicker from 'components/DateRangePicker'
import styles from './styles'


const Wrapper = createComponent(styles.wrapper, 'div')
const Box = createComponent(styles.box, 'div')
const BoxItem = createComponent(styles.boxItem, 'div')
const Chart = createComponent(styles.chart, 'div')


const Dashboard = () => {

    const [dates, setDates] = React.useState([])

    const onDateSelect = (dates) => {
        setDates(dates)
    }

    return (
        <Wrapper>
            <Box>
                <DateRangePicker onDateSelect={onDateSelect}/>
            </Box>
            <Box>
                <BoxItem>
                    <h2>Comorbilidad</h2>
                    <Chart>
                        <ComorbidityBar dates={dates} />
                    </Chart>
                </BoxItem>
                <BoxItem>
                    <h2>Síntomas</h2>
                    <Chart>
                        <SymptomsPie dates={dates} />
                    </Chart>
                </BoxItem>
                <BoxItem>
                    <h2>Mortalidad por Edad</h2>
                    <Chart>
                        <MortalityAgesHistogram dates={dates} />
                    </Chart>
                </BoxItem>
            </Box>
        </Wrapper>
    )
}

export default Dashboard
