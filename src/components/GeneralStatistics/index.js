import React from 'react'
import { createComponent } from 'react-fela'

import ComorbidityBar from 'components/ComorbidityBar'
import SymptomsPie from 'components/SymptomsPie'
import MortalityAgesHistogram from 'components/MortalityAgesHistogram'
import DateRangePicker from 'components/DateRangePicker'
import SelectInput from 'components/SelectInput'

import styles from './styles'


const Wrapper = createComponent(styles.wrapper, 'div')
const Box = createComponent(styles.box, 'div')
const BoxItem = createComponent(styles.boxItem, 'div')
const Chart = createComponent(styles.chart, 'div')

const Dashboard = () => {

    const [dates, setDates] = React.useState([])
    const [comorbiditySex, setComorbiditySex] = React.useState('all')
    const [symptomsSex, setSymptomsSex] = React.useState('all')
    const [symptomsBloodType, setSymptomsBloodType] = React.useState('all')
    const [symptomsHRFactor, setSymptomsHRFactor] = React.useState('all')
    
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
                    <SelectInput
                        id="comorbiditySex"
                        label="Sexo"
                        initialValue={comorbiditySex}
                        options={[{ value: 'all', label: 'Todos' }, { value: 'f', label: 'Femenino' }, { value: 'm', label: 'Masculino' }]}
                        onChange={setComorbiditySex}
                    />
                    <Chart>
                        <ComorbidityBar dates={dates} sex={comorbiditySex} />
                    </Chart>
                </BoxItem>
                <BoxItem>
                    <h2>Síntomas</h2>
                    
                    <Box>
                        <BoxItem small>
                            <SelectInput
                                id="symptomsSex"
                                label="Sexo"
                                initialValue={symptomsSex}
                                options={[{ value: 'all', label: 'Todos' }, { value: 'f', label: 'Femenino' }, { value: 'm', label: 'Masculino' }]}
                                onChange={setSymptomsSex}
                            />
                        </BoxItem>
                        <BoxItem small>
                            <SelectInput
                                id="symptomsBloodType"
                                label="Tipo de sangre"
                                initialValue={symptomsBloodType}
                                options={[{ value: 'all', label: 'Todos' }, { value: 'a', label: 'A' }, { value: 'b', label: 'B' }, { value: 'ab', label: 'AB' }, { value: 'o', label: 'O' }]}
                                onChange={setSymptomsBloodType}
                            />
                        </BoxItem>
                        <BoxItem small>
                            <SelectInput
                                id="symptomsHRFactor"
                                label="Factor RH"
                                initialValue={symptomsHRFactor}
                                options={[{ value: 'all', label: 'Todos' }, { value: 'positive', label: '+' }, { value: 'negative', label: '-' },]}
                                onChange={setSymptomsHRFactor}
                            />
                        </BoxItem>
                    </Box>
                    
                    <Chart>
                        <SymptomsPie dates={dates} sex={symptomsSex} bloodType={symptomsBloodType} HRFactor={symptomsHRFactor} />
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
