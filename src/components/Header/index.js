import React from 'react'
import { createComponent, connect } from 'react-fela'
import { Link } from 'react-router-dom'
import styles from './styles'

const HeaderWrapper = createComponent(styles.header, 'header', ['role'])
const NavigationWrapper = createComponent(styles.wrapper, 'div', ['role'])
const LogoWrapper = createComponent(styles.logoWrapper, 'div', ['role'])
const LinksWrapper = createComponent(styles.linksWrapper, 'div')
const Action = createComponent(styles.link, 'div')
const ConnectedLink= connect(()=> styles.linkItem)(Link)

const Header = () => {
    return (
        <HeaderWrapper>
            <NavigationWrapper>
                <LogoWrapper>
                    <ConnectedLink to="/">ARIM</ConnectedLink>
                </LogoWrapper>
                <LinksWrapper>
                    <Action>    
                        <ConnectedLink to="/dashboard">Estadística General</ConnectedLink>
                    </Action>
                    <Action>
                        <ConnectedLink to="/about">Acerca</ConnectedLink>
                    </Action>
                    
                </LinksWrapper>
            </NavigationWrapper>
        </HeaderWrapper>
    )
}

export default Header
