import React from 'react';
// import { Button } from '../../globalStyles';
// import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
// import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  CoursesSection,
  CoursesWrapper,
  CoursesHeading,
  CoursesContainer,
  CoursesCard,
  CoursesCardInfo,
  CoursesCardIcon,
  CoursesCardPlan,
//   CoursesCardCost,
//   CoursesCardLength,
  CoursesCardFeatures,
  CoursesCardFeature,
  CoursesHeading2
} from './Courses.elements';

function Courses() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <CoursesSection>
        <CoursesWrapper>
          <CoursesHeading>Commited to your success</CoursesHeading>
          <CoursesHeading2>Our Courses</CoursesHeading2>
          <CoursesContainer>
            <CoursesCard to='/sign-up'>
              <CoursesCardInfo>
                <CoursesCardIcon>
                  <GiRock />
                </CoursesCardIcon>
                <CoursesCardPlan>Self-Paced Learning</CoursesCardPlan>
                <CoursesCardFeatures>
                  <CoursesCardFeature>Study from anywhere </CoursesCardFeature>
                  <CoursesCardFeature>E-learning Video courses.</CoursesCardFeature>
                </CoursesCardFeatures>
              </CoursesCardInfo>
            </CoursesCard>
            <CoursesCard to='/sign-up'>
              <CoursesCardInfo>
                <CoursesCardIcon>
                  <GiCrystalBars />
                </CoursesCardIcon>
                <CoursesCardPlan>Expert Faculty</CoursesCardPlan>
                <CoursesCardFeatures>
                  <CoursesCardFeature>Quality education through a  </CoursesCardFeature>
                  <CoursesCardFeature>competent faculty that comprises</CoursesCardFeature>
                  <CoursesCardFeature>of world-class academics.</CoursesCardFeature>
                </CoursesCardFeatures>
              </CoursesCardInfo>
            </CoursesCard>
            <CoursesCard to='/sign-up'>
              <CoursesCardInfo>
                <CoursesCardIcon>
                  <GiCutDiamond />
                </CoursesCardIcon>
                <CoursesCardPlan>Mocktests</CoursesCardPlan>
                <CoursesCardFeatures>
                  <CoursesCardFeature>Analyse yourself and see where</CoursesCardFeature>
                  <CoursesCardFeature> you stand, how much you can</CoursesCardFeature>
                  <CoursesCardFeature> Make yourself perfect</CoursesCardFeature>
                </CoursesCardFeatures>
              </CoursesCardInfo>
            </CoursesCard>
            <CoursesCard to='/sign-up'>
              <CoursesCardInfo>
                <CoursesCardIcon>
                  <GiCutDiamond />
                </CoursesCardIcon>
                <CoursesCardPlan>LIVE & Interactive</CoursesCardPlan>
                <CoursesCardFeatures>
                  <CoursesCardFeature>Face2face or Virtual Live Classroom.</CoursesCardFeature>
                  <CoursesCardFeature>Interactive coaching and powerful</CoursesCardFeature>
                  <CoursesCardFeature>made easy & enjoyable</CoursesCardFeature>
                </CoursesCardFeatures>
              </CoursesCardInfo>
            </CoursesCard>
          </CoursesContainer>
        </CoursesWrapper>
      </CoursesSection>
    </IconContext.Provider>
  );
}
export default Courses;
