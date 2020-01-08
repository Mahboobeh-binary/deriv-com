import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Footer from './footer'
import { Nav, NavStatic } from './nav'

const Main = styled.main`
    background: var(--color-white);
    height: ${props => (props.is_static ? '92vh' : '100%')};
`

const Layout = ({ children, is_static }) => (
    <>
        {is_static ? <NavStatic /> : <Nav />}
        <Main is_static={is_static}>{children}</Main>
        {!is_static && <Footer />}
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    is_static: PropTypes.bool,
}

export default Layout
