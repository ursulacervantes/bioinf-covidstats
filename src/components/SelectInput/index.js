import React from 'react'
import PropTypes from 'prop-types'

const SelectInput = ({ id, label, initialValue, options, onChange, isMultiple}) => {

    const [value, setValue] = React.useState(initialValue)

    const handleOnChange = (e) => {
        setValue(e.target.value)
        onChange(e.target.value)
    }
    return ( 
        <>
            <label htmlFor={id}>{label}</label>
            <select 
                name={id}
                id={id} 
                value={value} 
                onChange={handleOnChange} 
                multiple={isMultiple}
            >
            {
                options.map((item)=>(
                    <option value={item.value} key={`${id}-${item.value}`}>{item.label}</option>
                ))
            }
            </select>
        </>
    )
}

SelectInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    isMultiple: PropTypes.bool,
};

export default SelectInput
