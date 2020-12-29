import React from 'react'
import { createComponent } from 'react-fela'

import Header from 'components/Header'
import styles from './styles'

const Body = createComponent(styles.body, 'main', ['role'])
const Wrapper = createComponent(styles.wrapper, 'div')

const Layout = ({children}) => {
    return (
        <Wrapper>
            <Header />
            <Body role='main'>{children}</Body>
        </Wrapper>
    )
}

export default Layout
