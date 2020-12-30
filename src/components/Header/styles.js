import { StyleSheet } from 'fela-tools'
import {
    SMALL_SCREEN,
    Z_ABOVE,
    TYPOGRAPHY,
} from 'styles/variables'

const header = {
    position: 'inherit',
    height: '60px',
    width: '100%',
    zIndex: Z_ABOVE,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 12px 0 rgba(0,0,0,.06)',
    willChange: 'box-shadow',
    transitionDuration: '250ms',
}

const wrapper = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `20px 2px`,
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
    color: TYPOGRAPHY.typographyPrimaryDefault,

    ':hover': { color: TYPOGRAPHY.typographySecondaryDefault, },

    ':focus': {
        outline: 'none',
    },
}

export const linkItem = {
    textDecoration: 'none',
    color: 'inherit',
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
    linkItem,
    linksWrapper,
    logoWrapper,
})
