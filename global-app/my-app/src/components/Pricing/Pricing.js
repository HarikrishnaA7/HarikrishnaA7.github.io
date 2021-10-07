import React from 'react';
import { Button } from '../../globalStyles';
// import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
// import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>PRICING PLANS</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Standard Package</PricingCardPlan>
                <PricingCardCost>RS 499</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Weekly one mock test</PricingCardFeature>
                  <PricingCardFeature>Video lectures</PricingCardFeature>
                  <PricingCardFeature>Live guidance</PricingCardFeature>
                  <PricingCardFeature>Doubts clarification</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Package</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Standard Package</PricingCardPlan>
                <PricingCardCost>RS 999</PricingCardCost>
                <PricingCardLength>6 months</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Weekly 2 mock tests</PricingCardFeature>
                  <PricingCardFeature>PDF solutions with all sets</PricingCardFeature>
                  <PricingCardFeature>Video lectures</PricingCardFeature>
                  <PricingCardFeature>Complete notes</PricingCardFeature>
                  <PricingCardFeature>Live guidance</PricingCardFeature>
                  <PricingCardFeature>Doubts clarification</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Package</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Platinum Package</PricingCardPlan>
                <PricingCardCost>RS 1299</PricingCardCost>
                <PricingCardLength>per year</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>7 days free</PricingCardFeature>
                  <PricingCardFeature>Weekly 1 mock tests</PricingCardFeature>
                  <PricingCardFeature>Video lectures</PricingCardFeature>
                  <PricingCardFeature>Complete notes</PricingCardFeature>
                  <PricingCardFeature>PDF solutions with all sets</PricingCardFeature>
                  <PricingCardFeature>Live guidance</PricingCardFeature>
                  <PricingCardFeature>Doubts clarification</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Package</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
