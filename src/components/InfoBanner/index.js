
import React from 'react'
import { createComponent } from 'react-fela'

import Container from 'components/Container'
import styles from './styles'

const Content = createComponent(styles.content, 'p')

const InfoBanner = (props) => {
    return (
        <Container>
            <Content>
                {props.message}
            </Content>
        </Container>
    )
}

export default InfoBanner
