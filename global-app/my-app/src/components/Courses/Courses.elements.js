import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CoursesSection = styled.div`
  padding: 100px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

export const CoursesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CoursesHeading = styled.h3`
  color: black;
  font-size: 30px;
  font-weight:300;
  color:#F7931E;
`;
export const CoursesHeading2 = styled.h1`
  color: black;
  font-size: 45px;
`;
export const CoursesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const CoursesCard = styled(Link)`
  background: #ffffff;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 250px;
  height: 300px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }
  &:nth-child(3) {
    margin: 24px 24px 24px 0px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    &:nth-child(3) {
      margin: 0px 24px 24px 24px;
    }
    &:hover {
      transform: none;
    }
  }
`;

export const CoursesCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  padding: 14px;
  align-items: center;
  color: #000000;
`;

export const CoursesCardIcon = styled.div`
  margin: 24px 0;
`;

export const CoursesCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const CoursesCardCost = styled.h4`
  font-size: 40px;
`;

export const CoursesCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const CoursesCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const CoursesCardFeature = styled.li`
  margin-bottom: 10px;
`;
