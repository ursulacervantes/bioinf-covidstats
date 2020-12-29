import React from 'react'
import { createComponent } from 'react-fela'
import { Link } from 'react-router-dom'
import styles from './styles'

const HeaderWrapper = createComponent(styles.header, 'header', ['role'])
const NavigationWrapper = createComponent(styles.wrapper, 'div', ['role'])
const LogoWrapper = createComponent(styles.logoWrapper, 'div', ['role'])
const LinksWrapper = createComponent(styles.linksWrapper, 'div')
const Action = createComponent(styles.link, 'div')

const Header = () => {
    return (
        <HeaderWrapper>
            <NavigationWrapper>
                <LogoWrapper>
                    <Link to="/">ARIM</Link>
                </LogoWrapper>
                <LinksWrapper>
                    <Action>
                        <Link to="/dashboard">Estadística General</Link>
                    </Action>
                    <Action>
                        <Link to="/about">Acerca</Link>
                    </Action>
                    
                </LinksWrapper>
            </NavigationWrapper>
        </HeaderWrapper>
    )
}

export default Header
