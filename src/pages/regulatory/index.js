import React from 'react'
import styled from 'styled-components'
import EUgrid from './_eu-grid'
import Layout from 'components/layout/layout'
import { Header, Text, Divider } from 'components/elements'
import { SEO, SectionContainer, GridContainer, CssGrid, CssGridColumn } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'
// Icons
import EU from 'images/svg/europe-map.svg'
import SVG from 'images/svg/svg.svg'
import Vanuatu from 'images/svg/footer-vanuatu.svg'
import FSC from 'images/svg/fsc.svg'
import Labuan from 'images/svg/footer-labuan.svg'

const StyledHeader = styled(Header)`
    max-width: ${props => props.maxwidth || '100%'};
    margin: 0 auto;
    padding: ${props => props.padding || '0'};
`
const Box = styled.div`
    width: 80rem;
    max-width: 100%;
    margin: 0 auto;
    padding: ${props => props.padding || '4rem 0 0'};

    & a {
        color: var(--color-red);
        font-weight: bold;
        text-decoration: none;

        :hover {
            text-decoration: underline;
        }
    }
`
const Europe = styled(EU)`
    max-width: 100%;
    margin: 0;
`

const Regulatory = () => (
    <Layout>
        <SEO
            title={localize('Licences and regulations')}
            description={localize(
                'Deriv operates under the jurisdiction of Binary.com which holds multiple licences to comply with regulatory requirements around the world.',
            )}
        />
        <SectionContainer>
            <GridContainer>
                <StyledHeader as="h1" align="center" lh="8rem">
                    {localize('Regulatory information')}
                </StyledHeader>
                <StyledHeader
                    as="h4"
                    align="center"
                    weight="normal"
                    lh="3.6rem"
                    padding="1.6rem 0 0"
                >
                    {localize(
                        'The services offered on Deriv and Binary.com are provided by the Binary Group. The group has several subsidiary companies that are licensed to operate Deriv and Binary.com in their registered jurisdictions.',
                    )}
                </StyledHeader>
                <StyledHeader as="h4" align="center" weight="normal" lh="3.6rem" padding="2rem 0 0">
                    {localize(
                        'Since 1999, the group has served traders around the world with integrity and reliability. We always hold ourselves to the highest ethical standards and regulatory requirements.',
                    )}
                </StyledHeader>
            </GridContainer>
        </SectionContainer>
        <Divider />
        <SectionContainer padding="8rem 0 0">
            <GridContainer>
                <StyledHeader font_size="3.6rem" align="center" lh="4.5rem">
                    {localize('Binary Investments (Europe) Ltd')}
                </StyledHeader>
                <Box>
                    <Text lh="1.55">
                        <Localize
                            translate_text="Binary Investments (Europe) Ltd, with a registered office at W Business Centre, Level 3, Triq Dun Karm, Birkirkara, BKR 9033, Malta, is licensed and regulated as a Category 3 Investment Services provider by the Malta Financial Services Authority (<0>licence no. IS/70156</0>)."
                            components={[
                                <a
                                    key={0}
                                    target="_blank"
                                    href="/WS-Binary-Investments-Europe-Limited.pdf"
                                    rel="noopener noreferrer"
                                />,
                            ]}
                        />
                    </Text>
                    <Text lh="1.55" margin="2rem 0 0">
                        {localize(
                            'European Union residents who wish to trade investment products will have their accounts opened with Binary Investments (Europe) Ltd.',
                        )}
                    </Text>
                </Box>
            </GridContainer>
        </SectionContainer>
        <SectionContainer padding="2.4rem 0 0">
            <GridContainer>
                <CssGrid
                    columns="minmax(10rem, 69rem) minmax(45rem, 1fr)"
                    column_gap="2.4rem"
                    tablet_columns="1fr 1fr"
                    mobile_columns="1fr"
                    mobile_row_gap="2rem"
                >
                    <CssGridColumn>
                        <Europe />
                    </CssGridColumn>
                    <CssGridColumn padding="0.8rem 0 0">
                        <EUgrid />
                    </CssGridColumn>
                </CssGrid>
            </GridContainer>
        </SectionContainer>
        <SectionContainer padding="2.4rem 0 0">
            <GridContainer>
                <Box padding="0 0 4rem">
                    <Text lh="1.55">
                        {localize(
                            'EU passporting rights: Binary Investments (Europe) Ltd is entitled to provide its services to EU member states through EU passporting rights. Refer to the map above for the list of EU countries that have access to Deriv and Binary.com.',
                        )}
                    </Text>
                </Box>
            </GridContainer>
        </SectionContainer>
        <SectionContainer padding="0">
            <GridContainer>
                <Box padding="0 0 8rem">
                    <CssGrid
                        columns="15.4rem 1fr"
                        column_gap="1.6rem"
                        row_gap="4rem"
                        tablet_columns="1fr 5fr"
                        mobile_columns="1fr 5fr"
                    >
                        <CssGridColumn>
                            <FSC />
                        </CssGridColumn>
                        <CssGridColumn>
                            <StyledHeader font_size="3.6rem" lh="4.5rem">
                                {localize('Binary (BVI) Ltd')}
                            </StyledHeader>
                            <Text lh="1.55" margin="0.8rem 0 0">
                                <Localize
                                    translate_text="Binary (BVI) Ltd, Kingston Chambers, P.O. Box 173, Road Town, Tortola, British Virgin Islands. Licensed and regulated by the British Virgin Islands Financial Services Commission - <0>view licence</0>."
                                    components={[
                                        <a
                                            key={0}
                                            target="_blank"
                                            href="/BVI_license.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                            <Text lh="1.55" margin="2rem 0 0">
                                {localize(
                                    'Clients from the rest of the world (excluding certain countries such as the USA, Canada, Hong Kong) will have their FX and CFD Metatrader 5 account opened with Binary (BVI) Ltd. Binary.com is not available in the British Virgin Islands.',
                                )}
                            </Text>
                        </CssGridColumn>
                        <CssGridColumn>
                            <Labuan />
                        </CssGridColumn>
                        <CssGridColumn>
                            <StyledHeader font_size="3.6rem" lh="4.5rem">
                                {localize('Binary (FX) Ltd')}
                            </StyledHeader>
                            <Text lh="1.55" margin="0.8rem 0 0">
                                <Localize
                                    translate_text="Binary (FX) Ltd., Lot No. F16, First Floor, Paragon Labuan, Jalan Tun Mustapha, 87000 Federal Territory of Labuan, Malaysia. Licensed and regulated by the Labuan Financial Services Authority to carry on a money-broking business <0>(licence no. MB/18/0024)</0>."
                                    components={[
                                        <a
                                            key={0}
                                            target="_blank"
                                            href="/Labuan-license.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                            <Text lh="1.55" margin="2rem 0 0">
                                {localize(
                                    'Clients from the rest of the world (excluding certain jurisdictions such as the USA, Canada, Japan, and the European Union) who wish to trade CFDs will have their MetaTrader 5 account opened with Binary (FX) Ltd. Binary.com is not available in Malaysia.',
                                )}
                            </Text>
                        </CssGridColumn>
                        <CssGridColumn>
                            <Vanuatu />
                        </CssGridColumn>
                        <CssGridColumn>
                            <StyledHeader font_size="3.6rem" lh="4.5rem">
                                {localize('Binary (V) Ltd')}
                            </StyledHeader>
                            <Text lh="1.55" margin="0.8rem 0 0">
                                <Localize
                                    translate_text="Binary (V) Ltd, Govant Building, Port Vila, PO Box 1276, Vanuatu, Republic of Vanuatu. Licensed and regulated by the Vanuatu Financial Services Commission - <0>(view licence)</0>."
                                    components={[
                                        <a
                                            key={0}
                                            target="_blank"
                                            href="https://www.vfsc.vu/wp-content/uploads/2015/12/List-of-Licensees-under-Dealers-in-Securities-Licensing-Act-CAP-70-18.11.2016.pdf"
                                            rel="noopener noreferrer"
                                        />,
                                    ]}
                                />
                            </Text>
                            <Text lh="1.55" margin="2rem 0 0">
                                {localize(
                                    'Clients from the rest of the world (excluding certain countries such as the USA, Canada, Hong Kong) will have their FX and CFD Metatrader 5 account opened with Binary (V) Ltd. Binary.com is not available in the Republic of Vanuatu.',
                                )}
                            </Text>
                        </CssGridColumn>
                        <CssGridColumn>
                            <SVG />
                        </CssGridColumn>
                        <CssGridColumn>
                            <StyledHeader font_size="3.6rem" lh="4.5rem">
                                {localize('Binary (SVG) Ltd')}
                            </StyledHeader>
                            <Text lh="1.55" margin="0.8rem 0 0">
                                {localize(
                                    'Binary (SVG) Ltd, Hinds Buildings, Kingstown, St. Vincent and the Grenadines; company number 25299 BC 2019.',
                                )}
                            </Text>
                            <Text lh="1.55" margin="2rem 0 0">
                                {localize(
                                    'Clients from the rest of the world (excluding certain countries such as the USA, Canada, and Hong Kong) will have their account opened with Binary (SVG) Ltd.',
                                )}
                            </Text>
                        </CssGridColumn>
                    </CssGrid>
                </Box>
            </GridContainer>
        </SectionContainer>
    </Layout>
)

export default WithIntl()(Regulatory)
