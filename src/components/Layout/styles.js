
import { StyleSheet } from 'fela-tools'
import {
    SMALL_SCREEN,
    Z_BUMP,
} from 'styles/variables'

const wrapper = {
    flex: '1 1 auto',
    zIndex: Z_BUMP,
}

const body = {
    margin: '40px auto 0' ,

    [SMALL_SCREEN]: {
        margin: '0 auto 20px',
    },
}

export default StyleSheet.create({
    wrapper,
    body,
})
