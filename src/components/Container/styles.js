import { StyleSheet } from 'fela-tools'
import {
    BACKGROUNDS,
    TYPOGRAPHY,
} from 'styles/variables'

const wrapper = {
    backgroundColor: BACKGROUNDS.backgroundContainerPrimary,
    color: TYPOGRAPHY.typographyPrimary,
}

const container = {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '1110px',
}

const grid = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    padding: 0,
    margin: '-1rem',
}

const row = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'inherit',
    alignItems: 'stretch',
    width: '100%',
    padding: '1rem 0',
}

const column  = {
    position: 'relative',
    display: 'inline-block',
    width: '30%',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    verticalAlign: 'top',
    marginTop: 0,
    marginBottom: 0,
}

const copyright = {
    maxWidth: '220px',
    margin: '80px 0 0',
    fontWeight: '400',
    fontSize: '14px',
    opacity: '.4',
}

const list = {
    margin: 0,
    padding: 0,
    listStyle: 'none',
}

const listItem = {
    display: 'inline-block',
    margin: '0 10px',

    ':first-child': {
        margin: 0,
    }
}

export default StyleSheet.create({
    wrapper,
    container,
    grid,
    row,
    column,
    copyright,
    list,
    listItem,
})
