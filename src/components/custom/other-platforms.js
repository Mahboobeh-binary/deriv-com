import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { SectionContainer, Flex, FlexGridContainer } from 'components/containers'
import { Card, Header, NavCard, CardLink, LinkText } from 'components/elements'
import { localize, LocalizedLink, Localize } from 'components/localization'
import { smarttrader_url, binary_url } from 'common/utility'
import device from 'themes/device'
// icons
import DTrader from 'images/svg/dtrader-icon.svg'
import DMT5 from 'images/svg/dmt5-icon.svg'
import DBot from 'images/svg/dbot-icon.svg'
import Smarttrader from 'images/svg/smarttrader.svg'
import Forex from 'images/svg/market-forex.svg'
import Commodities from 'images/svg/market-commodities.svg'
import StockIndices from 'images/svg/market-stock-indices.svg'
import SyntheticIndices from 'images/svg/market-synthetic-indices.svg'

const HeaderWrapper = styled.div`
    margin-bottom: 4rem;
`
const icon72 = css`
    width: 72px;
    height: 72px;
`
const StyledDbot = styled(DBot)`
    ${icon72}
`
const StyledDmt5 = styled(DMT5)`
    ${icon72}
`
const StyledDTrader = styled(DTrader)`
    ${icon72}
`

const StyledSmarttrader = styled(Smarttrader)`
    width: 72px;
    height: 72px;
`

const StyledHeader = styled(Header)`
    @media ${device.tabletS} {
        font-size: var(--text-size-header-1);
    }
`
const StyledLink = styled(LocalizedLink)`
    text-decoration: none;

    @media ${device.tabletL} {
        margin: 1rem 0;
    }
`
const StyledFlexGridContainer = styled(FlexGridContainer)`
    @media ${device.tabletL} {
        width: 100%;

        a {
            width: 100%;
            max-width: 50rem;
        }
    }
`

export const TraderCard = ({ is_selected, word_break_cover }) => (
    <StyledLink to="/dtrader">
        <Card
            cover_background="var(--color-red)"
            cover_content={localize('Discover DTrader now')}
            title={localize('DTrader')}
            Icon={StyledDTrader}
            content={[
                localize('A whole new trading experience on a powerful yet easy to use platform.'),
            ]}
            is_inline_icon
            min_height="11.6rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)

export const BotCard = ({ is_selected, word_break_cover }) => (
    <StyledLink to="/dbot">
        <Card
            cover_background="var(--color-orange)"
            cover_content={localize('Discover DBot now')}
            title={localize('DBot')}
            Icon={StyledDbot}
            content={[localize('Automated trading at your fingertips. No coding needed.')]}
            is_inline_icon
            min_height="11.6rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)

export const DMT5Card = ({ is_selected, word_break_cover }) => (
    <StyledLink to="/dmt5">
        <Card
            cover_background="var(--color-green)"
            cover_content={localize('Discover DMT5 now')}
            title={localize('DMT5')}
            Icon={StyledDmt5}
            content={[localize('The platform of choice for professionals worldwide.')]}
            is_inline_icon
            min_height="11.6rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)

export const SmarttraderCard = ({ is_selected, word_break_cover }) => (
    <StyledLink to={smarttrader_url} external="true" target="_blank">
        <Card
            cover_background="var(--color-blue-3)"
            cover_content={localize('Discover SmartTrader now')}
            title={localize('SmartTrader')}
            Icon={StyledSmarttrader}
            content={[
                <Localize
                    key={0}
                    translate_text="Trade the world’s markets on <0>Binary.com</0>’s classic platform."
                    components={[<LinkText key={0} href={binary_url} />]}
                />,
            ]}
            is_inline_icon
            min_height="11.6rem"
            is_selected={is_selected}
            width="100%"
            word_break_cover={word_break_cover}
        />
    </StyledLink>
)

export const OtherPlatform = ({ header, subHeader, exclude, is_nav }) => (
    <SectionContainer padding="0">
        {is_nav ? null : (
            <HeaderWrapper>
                <StyledHeader size="4.8rem" align="center" lh="5rem">
                    {header ? header : localize('Check out our other platforms')}
                </StyledHeader>
                {subHeader && (
                    <Header as="h4" align="center" weight="500" max_width="67.6rem" m="0.8rem auto">
                        {localize(
                            'Whether you’re a beginner or a seasoned trader, our trading experience is something you’ll love.',
                        )}
                    </Header>
                )}
            </HeaderWrapper>
        )}
        <StyledFlexGridContainer content_width="38.4rem" gap="1rem" grid="3" justify="center">
            {exclude.toLowerCase() !== 'dtrader' && <TraderCard />}
            {exclude.toLowerCase() !== 'dbot' && <BotCard />}
            {exclude.toLowerCase() !== 'dmt5' && <DMT5Card />}
        </StyledFlexGridContainer>
    </SectionContainer>
)

const cardProptypes = {
    is_selected: PropTypes.bool,
    word_break_cover: PropTypes.bool,
}
BotCard.propTypes = { ...cardProptypes }
DMT5Card.propTypes = { ...cardProptypes }
SmarttraderCard.propTypes = { ...cardProptypes }
TraderCard.propTypes = { ...cardProptypes }

OtherPlatform.propTypes = {
    exclude: PropTypes.string,
    header: PropTypes.string,
    is_nav: PropTypes.bool,
    subHeader: PropTypes.string,
}

const DMT5NavCard = styled(NavCard)`
    @media (max-width: 1250px) {
        margin-top: 3.2rem;
    }
`

export const NavPlatform = () => (
    <Flex wrap="wrap" jc="flex-start">
        <NavCard
            icon={DTrader}
            content={localize(
                'A whole new trading experience on a powerful yet easy to use platform. ',
            )}
            title={localize('DTrader')}
            style={{ marginRight: '5.6rem' }}
            to="/dtrader"
        />

        <DMT5NavCard
            icon={DMT5}
            content={localize('The platform of choice for professionals worldwide.')}
            title={localize('DMT5')}
            to="/dmt5"
        />
        <NavCard
            icon={DBot}
            content={localize('Automated trading at your fingertips. No coding needed.')}
            title={localize('DBot')}
            to="/dbot"
            style={{ marginTop: '3.2rem', marginRight: '5.6rem' }}
        />
        <NavCard
            icon={Smarttrader}
            content={
                <Localize
                    key={0}
                    translate_text="Trade the world’s markets on <0>Binary.com</0>’s classic platform."
                    components={[<LinkText key={0} href={binary_url} />]}
                />
            }
            title={localize('SmartTrader')}
            to={smarttrader_url}
            style={{ marginTop: '3.2rem' }}
            external="true"
            target="_blank"
        />
    </Flex>
)

export const NavMarket = () => (
    <Flex wrap="wrap" jc="flex-start">
        <NavCard
            icon={Forex}
            content={localize(
                'Trade the world’s largest financial market with popular forex pairs.',
            )}
            title={localize('Forex')}
            style={{ marginRight: '5.6rem' }}
            to="/markets/#trade"
        />
        <NavCard
            icon={StockIndices}
            content={localize(
                'Predict broader market trends and diversify your risk with stock indices.',
            )}
            title={localize('Stock indices')}
            to="/markets/#stock"
        />
        <NavCard
            icon={Commodities}
            content={localize("Trade natural resources that are central to the world's economy.")}
            title={localize('Commodities')}
            to="/markets/#commodities"
            style={{ marginTop: '3.2rem', marginRight: '5.6rem' }}
        />
        <NavCard
            icon={SyntheticIndices}
            content={localize('Enjoy synthetic markets that emulate real-world market movements.')}
            title={localize('Synthetic Indices')}
            to="/markets/#synthetic"
            style={{ marginTop: '3.2rem' }}
        />
    </Flex>
)

export const NavCompany = () => (
    <Flex wrap="wrap" jc="flex-start" max_width="42rem">
        <CardLink title={localize('Our story')} to="/about/#story" />
        <CardLink title={localize('Contact us')} to="/contact-us/" />
        <CardLink title={localize('Our leadership')} to="/about/#leadership" />
        <CardLink title={localize('Careers')} to="/careers/" />
        <CardLink title={localize('Why choose us?')} to="/why-choose-us/" />
    </Flex>
)

export const NavResources = () => (
    <Flex wrap="wrap" jc="flex-start" max_width="42rem">
        <CardLink title={localize('Help Centre')} to="/help-centre/" />
        <CardLink title={localize('Payment methods')} to="/payment-methods/" />
        {/* TODO: add this when blog is ready */}
        {/* <CardLink title={localize('Blog')} to="/blog/" /> */}
    </Flex>
)
