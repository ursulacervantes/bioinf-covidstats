import { StyleSheet } from 'fela-tools'
import {
    SMALL_SCREEN,
} from 'styles/variables'
const wrapper = {
    margin: '10px'
}
      
const box = {
    display: 'flex',
    flexWrap: 'wrap',
    // margin: '-10px',
}

const boxItem = {
    flex: '30%',
    margin: '10px',
    height: "20rem",
    width: "16rem",

    [SMALL_SCREEN] : {
        flex: '50%',
    }
}

export default StyleSheet.create({
    wrapper,
    box,
    boxItem,
})
