import React from 'react'
import styled from 'styled-components'
import { Table, TR, TC } from './_table.js'
import { Card, CardWrapper } from './_partner-card.js'
import { SectionContainer, Container } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { localize, Localize } from 'components/localization'
import { LinkButton } from 'components/form'
import device from 'themes/device'

const TitleWrapper = styled.div`
    max-width: 104.5rem;
    margin: 0 auto;
`
const StyledSection = styled(SectionContainer)`
    padding-bottom: 0;
    text-align: ${props => props.align || 'left'};
`
const StyledHeader = styled(Header)`
    margin-bottom: ${props => props.margin_bottom ? props.margin_bottom : '1.6rem'};

    @media ${device.tabletL} {
        text-align: center;
    }
`
const StyledText = styled(Text)`
    font-size: ${props => props.font_size ? props.font_size : '1.4rem'};
    line-height: ${props => props.lh ? props.lh : '1.14'};
`
const DerivIBProgramme = () => {
    return (
        <StyledSection>
            <Container direction='column'>
                <TitleWrapper>
                    <Header font_size='3.6rem' align='center'>{localize('Deriv IB Programme')}</Header>
                    <Header as='h4' align='center' weight='500'>{localize('Our IB programme is available to all Deriv affiliates. Earn commission from your clients’ trades on DMT5.')}</Header>
                </TitleWrapper>
                <SectionContainer padding='8rem 0 9.6rem 0'>
                    <StyledHeader as='h4'>{localize('Choose a commission plan:')}</StyledHeader>
                    <CardWrapper mt='-2rem' wrap='wrap'>
                        <Card height='42rem'>
                            <div>
                                <Header as='h4' lh='1.5'>{localize('DMT5 Standard')}</Header>
                                <Text>{localize('Earn when your customers trade on a DMT5 Standard account.')}</Text>
                                <Table grid_col_number={2}>
                                    <TC grid_area={'area0'}>
                                        <TR isTitle='true'>
                                            <StyledText weight='bold' lh='2.2'>
                                                {localize('Asset')}
                                            </StyledText>
                                        </TR>
                                        <TR>
                                            <StyledText>
                                                {localize('Forex and metals')}
                                            </StyledText>
                                        </TR>
                                        <TR>
                                            <StyledText>
                                                {localize('Cryptocurrencies')}
                                            </StyledText>
                                        </TR>
                                    </TC>
                                    <TC grid_area={'area1'}>
                                        <TR isTitle='true'>
                                            <StyledText weight='bold'>
                                                <Localize
                                                    translate_text="Commission per round<0/>trade"
                                                    components={[<br key={0} />]}
                                                />
                                            </StyledText>
                                        </TR>
                                        <TR>
                                            <StyledText>
                                                {localize('10 per lot')}
                                            </StyledText>
                                        </TR>
                                        <TR>
                                            <StyledText>
                                                {localize('0.3% per lot')}
                                            </StyledText>
                                        </TR>
                                    </TC>
                                </Table>
                            </div>
                        </Card>
                        <Card height='42rem'>
                            <div>
                                <Header as='h4' lh='1.5'>{localize('DMT5 Advanced')}</Header>
                                <Text>{localize('Earn when your customers trade on a DMT5 Advanced account.')}</Text>
                                <Table grid_col_number={2}>
                                    <TC grid_area={'area0'}>
                                        <TR isTitle='true'>
                                            <StyledText weight='bold' lh='2.2'>
                                                {localize('Asset')}
                                            </StyledText>
                                        </TR>
                                        <TR>
                                            <StyledText>
                                                {localize('Forex and metals')}
                                            </StyledText>
                                        </TR>
                                    </TC>
                                    <TC grid_area={'area1'}>
                                        <TR isTitle='true'>
                                            <StyledText weight='bold'>
                                                <Localize
                                                    translate_text="Commission per round<0/>trade"
                                                    components={[<br key={0} />]}
                                                />
                                            </StyledText>
                                        </TR>
                                        <TR>
                                            <StyledText>
                                                {localize('10 per lot')}
                                            </StyledText>
                                        </TR>
                                    </TC>
                                </Table>
                            </div>
                        </Card>
                        <Card height='42rem'>
                            <div>
                                <Header as='h4' lh='1.5'>{localize('How it’s calculated')}</Header>
                                <Text>{localize('For example, a round trade of 1 lot of the Volatility 75 Index for a price of USD 125,000 would pay out USD 12.5 in commission based on the following formula: ')}</Text>
                                <Text weight='bold' margin='2.5rem 0'>{localize('USD 10 X 1 lot X USD 125,000 / 100,000 = USD 12.5')}</Text>
                                <Text>{localize('If your account currency is in euro or pound sterling, your commission will be converted based on the latest exchange rate.')}</Text>
                            </div>
                        </Card>
                    </CardWrapper>
                    <StyledSection padding='4rem 0 0 0' align='center'>
                        <StyledHeader as='h4' align='center' weight='500' lh='1.5' margin_bottom='2.6rem'>{localize('Can’t decide which programme or commission plan suits you?')}</StyledHeader>
                        <LinkButton secondary to='/'>{localize('Contact us')}</LinkButton>
                    </StyledSection>
                </SectionContainer>
            </Container>
        </StyledSection>
    )
}

export default DerivIBProgramme