
import React from 'react'
import { createComponent } from 'react-fela'
import styles from './styles'

const Wrapper = createComponent(styles.wrapper, 'div')
const Content = createComponent(styles.container, 'div')

const Container = ({children}) => {
    return (
        <Wrapper>
            <Content>
                {children}
            </Content>
        </Wrapper>
    )
}

export default Container
