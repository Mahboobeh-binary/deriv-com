import React from 'react'
import { localize } from 'components/localization'
import Layout from 'components/layout/layout'
import SEO from 'components/containers/seo'
import Hero from './_hero.js'
import Numbers from './_numbers.js'
import HowItWorks from './_how-it-works.js'
import Trading from './_trading.js'

const Dtrader = () => {
    return (
        <Layout>
            <SEO title={localize('Dtrader')} />
            <Hero />
            <Numbers />
            <HowItWorks />
            <Trading />
        </Layout>
    )
}

export default Dtrader
