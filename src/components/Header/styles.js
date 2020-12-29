import { StyleSheet } from 'fela-tools'
import {
    SMALL_SCREEN,
    Z_ABOVE,
} from 'styles/variables'

const header = props => ({
    position: 'inherit',
    height: '60px',
    width: '100%',
    zIndex: Z_ABOVE,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 transparent',
    willChange: 'box-shadow',
    transitionDuration: '250ms',

})


const wrapper = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `0 10px`,
    width: '100%',
    position: 'relative',

    [SMALL_SCREEN]: {
        padding: 0,
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
}

const linksWrapper = {
    padding: '0 20px',
    position: 'absolute',
    top: 0,
    right: 0,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',

    [SMALL_SCREEN]: {
        position: 'relative',
        height: 'auto',
    },
}

const link = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px',

    '[aria-current="true"]': {
        color: 'red',
    },

    ':hover': { color: 'red' },

    ':focus': {
        outline: 'none',
    },
}

const logoWrapper = {
    padding: '20px 20px',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',

    [SMALL_SCREEN]: {
        display: 'none',
    },
}

export default StyleSheet.create({
    header,
    wrapper,
    link,
    linksWrapper,
    logoWrapper,
})
