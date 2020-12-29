import React from 'react'
import { Bar } from '@nivo/bar'

const CustomBarComponent = ({
    data,

    x,
    y,
    width,
    height,
    borderRadius,
    color,
    borderWidth,
    borderColor,

    label,
    shouldRenderLabel,
    labelColor,

    showTooltip,
    hideTooltip,
    onClick,
    onMouseEnter,
    onMouseLeave,
    tooltip,

    theme,
}) => {
    const y1 = (data.data.value - data.data.error[0]) * 20
    const y2 = (data.data.value - data.data.error[1]) * 20
    const x1 = (width / 2)

    const handleTooltip = e => showTooltip(tooltip, e)
    const handleMouseEnter = e => {
        onMouseEnter(data, e)
        showTooltip(tooltip, e)
    }
    const handleMouseLeave = e => {
        onMouseLeave(data, e)
        hideTooltip(e)
    }

    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect width={width} height={height} fill={data.fill ? data.fill : color}
                strokeWidth={borderWidth}
                rx={borderRadius}
                ry={borderRadius}
                stroke={borderColor}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleTooltip}
                onMouseLeave={handleMouseLeave}
                onClick={onClick}
            />
            <line x1={x1} x2={x1} y1={y1} y2={y2} stroke="#000000" strokeWidth="1" />
            <line x1={x1 - 5} x2={x1 + 5} y1={y1} y2={y1} stroke="#000000" strokeWidth="1" />
            <line x1={x1 - 5} x2={x1 + 5} y1={y2} y2={y2} stroke="#000000" strokeWidth="1" />
            {shouldRenderLabel && (
                <text
                    x={width / 2}
                    y={height / 2}
                    textAnchor="middle"
                    dominantBaseline="central"
                    style={{
                        ...theme.labels.text,
                        pointerEvents: 'none',
                        fill: labelColor,
                    }}
                >
                    {label}
                </text>
            )}
        </g>
    )
}

const BarChart = ({ data }) => (
    <Bar
        barComponent={CustomBarComponent}
        data={data}
        width={800}
        height={800}
        indexBy="name"
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

export default BarChart