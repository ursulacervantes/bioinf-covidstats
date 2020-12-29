import React from 'react'
import { gql, useQuery } from '@apollo/react-hooks'
import ErrorBar from 'components/ErrorBar'
import { ResponsiveBar } from '@nivo/bar'

const GET_MORTALITY = gql`
    query(
        $dateFrom: String
        $dateTo: String
    ) {
        results: getMortalityBySex(
            dateFrom: $dateFrom
            dateTo: $dateTo
        ) {
            ages
            varones
            mujeres
            error
        }
    }
`
const MortalityAgesHistogram = () => {
    const { data, loading, error } = useQuery(GET_MORTALITY, {
        variables: {
            dateFrom: "",
            dateTo: "",
        },
    })

    if (error) {
        return "Error"
    }

    if (loading) {
        return "Cargando"
    }

    return (
        <ResponsiveBar
            data={data.results}
            groupMode={"grouped"}
            indexBy={"ages"}
            keys={["varones", "mujeres"]}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 140,
                    translateY: 0,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemsSpacing: 0,
                    symbolSize: 20,
                    itemDirection: 'left-to-right'
                }
            ]}
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -30,
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
        />
    )
}

export default MortalityAgesHistogram
