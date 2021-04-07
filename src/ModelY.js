import React from 'react'
import Item from './components/Item'
import ModelYImg from './assets/Desktop-ModelY.jpeg'

function ModelY() {
  return (
    <>
      <Item
      title='Model S'
      desc='Visite una tienda'
      descLink=''
      backgroundImg={ModelYImg}
      leftBtnText= 'ORDEN PERSONLIZADA'
      leftBtnLink=''
      rigthBtnTxt='INVENTARIOS DE AUTOS NUEVOS'
      rigthBtnLink=''
      twoButtons='true'
      />
    </>
  );
}

export default ModelY;
