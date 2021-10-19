import React from 'react';
// import { Button } from '../../globalStyles';
// import { AiFillThunderbolt } from 'react-icons/ai';
// import { GiCrystalBars } from 'react-icons/gi';
// import { GiCutDiamond, GiRock } from 'react-icons/gi';
// import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  WhychooseusSection,
  WhychooseusWrapper,
  WhychooseusHeading,
  WhychooseusContainer,
  WhychooseusCard,
  WhychooseusCardInfo,
  WhychooseusCardIcon,
  WhychooseusCardPlan,
//   WhychooseusCardCost,
//   WhychooseusCardLength,
  WhychooseusCardFeatures,
  WhychooseusCardFeature,
  Img
} from './Whychooseus.elements';

function Whychooseus() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <WhychooseusSection>
        <WhychooseusWrapper>
          <WhychooseusHeading>Why Choose Us ?</WhychooseusHeading>
          <WhychooseusContainer>
            <WhychooseusCard to='/sign-up'>
              <WhychooseusCardInfo>
                <WhychooseusCardIcon>
                  {/* <GiRock /> */}
                  <Img src={require('../../images/icon1.png')} alt={'image'} />
                </WhychooseusCardIcon>
                <WhychooseusCardPlan>Self-Paced Learning</WhychooseusCardPlan>
                <WhychooseusCardFeatures>
                  <WhychooseusCardFeature>Study from anywhere </WhychooseusCardFeature>
                  <WhychooseusCardFeature>E-learning Video courses.</WhychooseusCardFeature>
                </WhychooseusCardFeatures>
              </WhychooseusCardInfo>
            </WhychooseusCard>
            <WhychooseusCard to='/sign-up'>
              <WhychooseusCardInfo>
                <WhychooseusCardIcon>
                  {/* <GiCrystalBars /> */}
                  <Img src={require('../../images/icon 2.png')} alt={'alt'} />
                </WhychooseusCardIcon>
                <WhychooseusCardPlan>Expert Faculty</WhychooseusCardPlan>
                <WhychooseusCardFeatures>
                  <WhychooseusCardFeature>Quality education through a  </WhychooseusCardFeature>
                  <WhychooseusCardFeature>competent faculty that comprises</WhychooseusCardFeature>
                  <WhychooseusCardFeature>of world-class academics.</WhychooseusCardFeature>
                </WhychooseusCardFeatures>
              </WhychooseusCardInfo>
            </WhychooseusCard>
            <WhychooseusCard to='/sign-up'>
              <WhychooseusCardInfo>
                <WhychooseusCardIcon>
                  {/* <GiCutDiamond /> */}
                  <Img src={require('../../images/icon 3-1cr.png')} alt={'alt'} />
                </WhychooseusCardIcon>
                <WhychooseusCardPlan>Mock tests</WhychooseusCardPlan>
                <WhychooseusCardFeatures>
                  <WhychooseusCardFeature>Analyse yourself and see where</WhychooseusCardFeature>
                  <WhychooseusCardFeature> you stand, how much you can</WhychooseusCardFeature>
                  <WhychooseusCardFeature> Make yourself perfect</WhychooseusCardFeature>
                </WhychooseusCardFeatures>
              </WhychooseusCardInfo>
            </WhychooseusCard>
            <WhychooseusCard to='/sign-up'>
              <WhychooseusCardInfo>
                <WhychooseusCardIcon>
                  {/* <GiCutDiamond /> */}
                  <Img src={require('../../images/icon 3.png')} alt={'alt'} />
                </WhychooseusCardIcon>
                <WhychooseusCardPlan>LIVE & Interactive</WhychooseusCardPlan>
                <WhychooseusCardFeatures>
                  <WhychooseusCardFeature>Face2face or Virtual Live Classroom.</WhychooseusCardFeature>
                  <WhychooseusCardFeature>Interactive coaching and powerful</WhychooseusCardFeature>
                  <WhychooseusCardFeature>made easy & enjoyable</WhychooseusCardFeature>
                </WhychooseusCardFeatures>
              </WhychooseusCardInfo>
            </WhychooseusCard>
          </WhychooseusContainer>
        </WhychooseusWrapper>
      </WhychooseusSection>
    </IconContext.Provider>
  );
}
export default Whychooseus;
