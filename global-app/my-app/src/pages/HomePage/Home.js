import React from 'react';
import { homeObjOne} from './Data';
import { InfoSection, Pricing } from '../../components';
import {Whychooseus} from '../../components';
import Products from '../Products/Products';
import {Courses} from '../../components';


// C:\node\HarikrishnaA7.github.io\global-app\my-app\src\images
function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      {/* <InfoSection {...homeObjTwo} /> */}

      <Whychooseus />
      <Products />
      {/* <Courses /> */}
      <Pricing />
    </>
  );
} 

export default Home;
