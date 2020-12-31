
import React from 'react'
import { createComponent } from 'react-fela'

import Container from 'components/Container'
import styles from './styles'

const TitlePrimary = createComponent(styles.titlePrimary, 'h2')
const TitleSecondary = createComponent(styles.titleSecondary, 'h3')
const Content = createComponent(styles.content, 'p')

const Banner = (props) => {
    return (
        <Container>
            <TitlePrimary>
                {props.titlePrimary}
            </TitlePrimary>
            <TitleSecondary>
                {props.titleSecondary}
            </TitleSecondary>
            <Content>
                {props.content}
            </Content>
        </Container>
    )
}

export default Banner
