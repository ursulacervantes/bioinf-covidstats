import { StyleSheet } from 'fela-tools'

const title = {
    lineHeight: '1.23',
    fontWeight: '400',
    marginBottom: '30px',
    fontFamily: 'Formular,Arial,Helvetica,sans-serif',
    letterSpacing: '.7px',
}

const titlePrimary = {
    ...title,
    fontSize: '64px',
}

const titleSecondary = {
    ...title,
    fontSize: '40px',
}

const content = {
    fontSize: '20px',
    letterSpacing: '.2px',
    lineHeight: 1.6,
    marginBottom: '60px',
}

export default StyleSheet.create({
    titlePrimary,
    titleSecondary,
    content,
})
