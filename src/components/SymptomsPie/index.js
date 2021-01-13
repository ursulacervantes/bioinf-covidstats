import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/react-hooks'
import { loader } from 'graphql.macro';
import { ResponsivePie } from '@nivo/pie'

const query = loader('./query.graphql');

const SymptomsPie = ({ dates, sex, bloodType, HRFactor }) => {

    const [dateFrom, dateTo] = dates

    const { data, loading, error } = useQuery(query, {
        variables: {
            dateFrom,
            dateTo,
            sex,
            bloodType,
            HRFactor,
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

SymptomsPie.propTypes = {
    dates: PropTypes.arrayOf(PropTypes.object).isRequired,
    sex: PropTypes.string.isRequired,
    bloodType: PropTypes.string.isRequired,
    HRFactor: PropTypes.string.isRequired,
}

export default SymptomsPie
