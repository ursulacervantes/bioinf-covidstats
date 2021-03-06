import { StyleSheet } from 'fela-tools'

const wrapper = {
    margin: '10px'
}
      
const box = {
    display: 'flex',
    flexWrap: 'wrap',
}

const boxItem = ({small}) => ({
    flex: small ? '33%' : '50%',
})

const chart = {
    height: "20rem",
}

export default StyleSheet.create({
    wrapper,
    box,
    boxItem,
    chart,
})
