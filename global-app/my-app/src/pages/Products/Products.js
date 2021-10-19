import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo } from './Data';

function Products() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </>
  );
}
//https://xd.adobe.com/view/aed3fedb-9a14-4238-a37b-946a6f796f25-fb80/
export default Products;
