import React from 'react'
import styled from 'styled-components'
import { Card, CardWrapper } from './_partner-card.js'
import { Table, TR, TC } from './_table.js'
import { SectionContainer, Container } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'

const StyledSection = styled(SectionContainer)`
    padding-bottom: 0;    
    background-color: var(--color-grey-8);
`
const TitleWrapper = styled.section`
    h1:first-child {
        margin-bottom: 1.6rem
    }
`

const StyledText = styled(Text)`
    font-size: ${props => props.font_size ? props.font_size : '1.4rem'};
    line-height: 1.14;
`
const StyledHeader = styled(Header)`
    margin-bottom: 1.6rem;

    @media ${device.tabletL} {
        text-align: center;
    }
`

const CPAContent = styled.div`
    ${Text} {
        margin-top: 2.4rem;
    }
`
const RevenueShareData = [
    {
        title: 'Tire',
        data: ['1', '2']
    },
    {
        title: 'Monthly revenue  (USD)',
        data: ['$0 - $20,000', '$20,001 and above']
    },
    {
        title: 'Commission',
        data: ['30%', '45%']
    }
]
const Turnover = [
    {
        title: 'Probability of return',
        data: ['0-19.999%', '20-39.999%', '40-59.999%', '60-79.999%', '80-94.999%', '95% and above']
    },
    {
        title: 'Commission',
        data: ['1.25%', '1%', '0.75%', '0.5%', '0.25%', '0%']
    }
]
const DerivAffiliateProgramme = () => {
    return (
        <StyledSection>
            <Container direction='column'>
                <TitleWrapper>
                    <Header font_size='3.6rem' align='center'>{localize('Deriv Affiliate Programme')}</Header>
                    <Header as='h4' align='center' weight='500'>{localize('Partner with us as an affiliate. Earn commission from the total net revenue of your referred clients’ trades on DTrader, DBot and DMT5.')}</Header>
                </TitleWrapper>
                <SectionContainer>
                    <StyledHeader as='h4'>{localize('Choose a commission plan:')}</StyledHeader>
                    <CardWrapper mt='-2rem' wrap='wrap'>
                        <Card>
                            <div>
                                <Header as='h4' lh='1.5'>{localize('Revenue share')}</Header>
                                <Text>{localize('Earn based on the monthly revenue generated by your clients.')}</Text>
                                <Table grid_col_number={3}>
                                    {RevenueShareData.map((col, index) => (
                                        <TC grid_area={'area' + index} key={index}>
                                            <TR isTitle='true'>
                                                <StyledText weight='bold'>
                                                    {localize(col.title)}
                                                </StyledText>
                                            </TR>
                                            {col.data.map((data, index) => (
                                                <TR key={index}>
                                                    <StyledText>
                                                        {localize(data)}
                                                    </StyledText>
                                                </TR>
                                            ))}
                                        </TC>
                                    ))}
                                </Table>
                            </div>
                        </Card>
                        <Card>
                            <div>
                                <Header as='h4' lh='1.5'>{localize('Turnover')}</Header>
                                <Text>{localize('Earn based on each contract’s payout probability.')}</Text>
                                <Table grid_col_number={2}>
                                    {Turnover.map((col, index) => (
                                        <TC grid_area={'area' + index} key={index}>
                                            <TR isTitle='true'>
                                                <StyledText weight='bold'>
                                                    {localize(col.title)}
                                                </StyledText>
                                            </TR>
                                            {col.data.map((data, index) => (
                                                <TR key={index}>
                                                    <StyledText>
                                                        {localize(data)}
                                                    </StyledText>
                                                </TR>
                                            ))}
                                        </TC>
                                    ))}
                                </Table>
                            </div>
                        </Card>
                        <Card>
                            <div>
                                <Header as='h4' lh='1.5'>{localize('CPA (EU only)')}</Header>
                                <Text>{localize('Earn based on each successful referral')}</Text>
                                <CPAContent>
                                    <Text>
                                        <Localize
                                            translate_text="You earn <0>USD 100</0> when a referred client successfully deposits a one-time or cumulative total of <0>USD 100</0> into their Deriv account."
                                            components={[<strong key={0} />]}
                                        />
                                    </Text>
                                    <Text>
                                        <Localize
                                            translate_text="This plan is available exclusively to EU-based affiliates."
                                            components={[<strong key={0} />]}
                                        />
                                    </Text>
                                </CPAContent>
                            </div>
                        </Card>
                    </CardWrapper>
                </SectionContainer>
            </Container>
        </StyledSection>
    )
}

export default DerivAffiliateProgramme