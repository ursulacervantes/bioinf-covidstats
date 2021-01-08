import { StyleSheet } from 'fela-tools'

const wrapper = {
    display: 'flex',
    flexGrow: 1,
    position: 'relative',
}

const inputWrapper = ({isLeft}) => ({
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '1px solid var(--lighter-grey,#eaeaea)',
    borderRadius: '.25rem',
    display: 'flex',
    flexDirection: 'row',
    minHeight: '3.25rem',
    padding: '.375rem 1rem',

    ...(isLeft && {
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
    }),

    ...(!isLeft && {
        borderBottomRightRadius: 0,
        borderRight: 0,
        borderTopRightRadius: 0,
    }

    )
})

const inputButton = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
}

const label = {
    color: '#6c7079',
    lineHeight: '.75rem',
    marginBottom: '.25rem',
}

const date = {
    border: 0,
    fontSize: '1.125rem',
    lineHeight: '1.375rem',
    padding: 0,
}

export default StyleSheet.create({
    wrapper,
    inputWrapper,
    inputButton,
    label,
    date,
})
