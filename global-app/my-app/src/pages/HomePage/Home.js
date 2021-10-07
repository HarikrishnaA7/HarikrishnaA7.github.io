import React from 'react';
import { homeObjOne } from './Data';
import { InfoSection, Pricing } from '../../components';
import {Whychooseus} from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Whychooseus />
      <Pricing />
    </>
  );
} 

export default Home;
