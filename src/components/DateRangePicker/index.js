import React from 'react'
import { createComponent } from 'react-fela'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from './styles'

const Wrapper = createComponent(styles.wrapper, 'div')
const InputWrapper = createComponent(styles.inputWrapper, 'div')
const InputButton = createComponent(styles.inputButton, 'div')
const Label = createComponent(styles.label, 'div')
const DateField = createComponent(styles.date, 'div')

const CustomDateInput = React.forwardRef((props, ref) => {

    const endDate = props.endDate ? props.endDate : props.startDate

    return (
        <div onClick={props.onClick} ref={ref}>
            <Wrapper>
                <InputWrapper>
                    <InputButton>
                        <Label>Desde: </Label>
                        <DateField>{props.startDate.toDateString()}</DateField>
                    </InputButton>
                </InputWrapper>
                <InputWrapper isLeft>
                    <InputButton>
                        <Label>Hasta: </Label>
                        <DateField>{endDate.toDateString()}</DateField>
                    </InputButton>
                </InputWrapper>
            </Wrapper>
        </div>
    )
})

const DateRangePicker = ({ onDateSelect }) => {
    var fromDate = new Date()
    fromDate.setDate(fromDate.getDate() - 10)

    const [startDate, setStartDate] = React.useState(fromDate)
    const [endDate, setEndDate] = React.useState(new Date())
    const onChange = (dates) => {
        const [startDate, endDate] = dates
        
        setStartDate(startDate)
        setEndDate(endDate)

        //If end date is selected, trigger custom action
        if(endDate){
            onDateSelect(dates)
        }
    }

    return (
        <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            maxDate={new Date()}
            selectsRange
            shouldCloseOnSelect={false}
            customInput={<CustomDateInput startDate={startDate} endDate={endDate} />}
        />
    )
}

export default DateRangePicker
