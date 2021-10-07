import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WhychooseusSection = styled.div`
  padding: 100px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
`;

export const WhychooseusWrapper = styled.div`
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

export const WhychooseusHeading = styled.h1`
  color: black;
  font-size: 36px;
`;

export const WhychooseusContainer = styled.div`
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

export const WhychooseusCard = styled(Link)`
  background: #ffffff;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const WhychooseusCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  padding: 24px;
  align-items: center;
  color: #000000;
`;

export const WhychooseusCardIcon = styled.div`
  margin: 24px 0;
`;

export const WhychooseusCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const WhychooseusCardCost = styled.h4`
  font-size: 40px;
`;

export const WhychooseusCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const WhychooseusCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const WhychooseusCardFeature = styled.li`
  margin-bottom: 10px;
`;
