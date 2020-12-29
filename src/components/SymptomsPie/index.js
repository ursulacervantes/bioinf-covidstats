import React from 'react'
import { gql, useQuery } from '@apollo/react-hooks'
import { ResponsivePie } from '@nivo/pie'

const GET_SYMPTOMS = gql`
    query(
        $dateFrom: String
        $dateTo: String
        $sex: String
        $bloodType: String
        $HRFactor: String
    ) {
        results: getSymptoms(
            dateFrom: $dateFrom
            dateTo: $dateTo
            sex: $sex
            bloodType: $bloodType
            HRFactor: $HRFactor
        ) {
            name
            value
            id
        }
    }
`
const SymptomsPie = () => {
    const { data, loading, error } = useQuery(GET_SYMPTOMS, {
        variables: {
            dateFrom: "",
            dateTo: "",
            sex: "",
            bloodType: "",
            HRFactor: "",
        },
    })

    if (error) {
        return "Error"
    }

    if (loading) {
        return "Cargando"
    }
    return (
        <ResponsivePie
            data={data.results}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            startAngle={-16}
            sortByValue={true}
            colors={{ scheme: 'nivo' }}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', '0.1']] }}
            radialLabelsTextColor="#333333"
            radialLabelsLinkDiagonalLength={15}
            radialLabelsLinkHorizontalLength={8}
            radialLabelsTextXOffset={2}
            radialLabelsLinkColor={{ from: 'color' }}
            sliceLabel="value"
            sliceLabelsSkipAngle={10}
            sliceLabelsTextColor="#333333"
        />
    )
}

export default SymptomsPie
