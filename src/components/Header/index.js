import React from 'react'
import { createComponent } from 'react-fela'
import { Link } from 'react-router-dom'
import styles, { linkItem } from './styles'

const HeaderWrapper = createComponent(styles.header, 'header', ['role'])
const NavigationWrapper = createComponent(styles.wrapper, 'div', ['role'])
const LogoWrapper = createComponent(styles.logoWrapper, 'div')
const LinksWrapper = createComponent(styles.linksWrapper, 'div')
const Action = createComponent(styles.link, 'div')

const Header = () => {
    return (
        <HeaderWrapper role="banner">
            <NavigationWrapper role="navigation">
                <LogoWrapper>
                    <Link to="/" style={linkItem}>ARIM</Link>
                </LogoWrapper>
                <LinksWrapper>
                    <Action>    
                        <Link to="/dashboard" style={linkItem}>Estadística General</Link>
                    </Action>
                    <Action>
                        <Link to="/about" style={linkItem}>Acerca</Link>
                    </Action>
                </LinksWrapper>
            </NavigationWrapper>
        </HeaderWrapper>
    )
}

export default Header
