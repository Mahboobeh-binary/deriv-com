import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SectionContainer, FlexGridContainer } from 'components/containers'
import { Card, Header } from 'components/elements'
import { localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
// icons
import DTrader from 'images/svg/dtrader-icon.svg'
import DMT5 from 'images/svg/dmt5-icon.svg'
import DBot from 'images/svg/dbot-icon.svg'

const HeaderWrapper = styled.div`
    margin-bottom: 4rem;
`

const StyledDbot = styled(DBot)`
    width: 72px;
    height: 72px;
`

const StyledDmt5 = styled(DMT5)`
    width: 72px;
    height: 72px;
`

const StyledDTrader = styled(DTrader)`
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

    @media ${device.tabletS} {
        margin: 1rem 1rem;
    }
`

const StyledSubHeader = styled(Header)`
    margin: 0.8rem auto;
    max-width: ${props => props.maxWidth || ''};
`

export const TraderCard = ({ is_selected }) => (
    <StyledLink to="/dtrader">
        <Card
            cover_background="var(--color-red)"
            cover_content={localize('Discover DTrader now')}
            title={localize('DTrader')}
            Icon={StyledDTrader}
            content={[localize('The platform to start with. It’s powerful yet easy to use.')]}
            is_inline_icon
            min_height="11.6rem"
            is_selected={is_selected}
        />
    </StyledLink>
)
const cardProptypes = {
    is_selected: PropTypes.bool,
}
TraderCard.propTypes = { ...cardProptypes }

export const BotCard = ({ is_selected }) => (
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
        />
    </StyledLink>
)
BotCard.propTypes = { ...cardProptypes }

export const DMT5Card = ({ is_selected }) => (
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
        />
    </StyledLink>
)
DMT5Card.propTypes = { ...cardProptypes }

export const OtherPlatform = ({ header, subHeader, exclude, is_nav }) => (
    <SectionContainer padding="0">
        {is_nav ? null : (
            <HeaderWrapper>
                <StyledHeader font_size="4.8rem" align="center" lh="5rem">
                    {header ? header : localize('Check out our other platforms')}
                </StyledHeader>
                {subHeader && (
                    <StyledSubHeader as="h4" align="center" weight="500" maxWidth="67.6rem">
                        {localize(
                            'Whether you’re a beginner or a seasoned trader, our trading experience is something you’ll love.',
                        )}
                    </StyledSubHeader>
                )}
            </HeaderWrapper>
        )}
        <FlexGridContainer content_width="38.4rem" gap="1rem" grid="3" justify="center">
            {exclude.toLowerCase() !== 'dtrader' && <TraderCard />}
            {exclude.toLowerCase() !== 'dbot' && <BotCard />}
            {exclude.toLowerCase() !== 'dmt5' && <DMT5Card />}
        </FlexGridContainer>
    </SectionContainer>
)

OtherPlatform.propTypes = {
    exclude: PropTypes.string,
    header: PropTypes.string,
    is_nav: PropTypes.bool,
    subHeader: PropTypes.string,
}
