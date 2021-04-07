import React from 'react'
import Item from './components/Item'
import Model3Img from './assets/Desktop-Model3.jpeg'

function Model3() {
  return (
    <>
      <Item
      title='Model S'
      desc='Visite una tienda'
      descLink=''
      backgroundImg={Model3Img}
      leftBtnText= 'ORDEN PERSONLIZADA'
      leftBtnLink=''
      rigthBtnTxt='INVENTARIOS DE AUTOS NUEVOS'
      rigthBtnLink=''
      twoButtons='true'
      />
    </>
  );
}

export default Model3;
