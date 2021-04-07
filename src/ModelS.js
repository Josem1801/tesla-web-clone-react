import React from 'react'
import Item from './components/Item'
import ModelSImg from './assets/Desktop-ModelS.jpeg'

function ModelS() {
  return (
    <>
      <Item
      title='Model S'
      desc='Visite una tienda'
      descLink=''
      backgroundImg={ModelSImg}
      leftBtnText= 'ORDEN PERSONLIZADA'
      leftBtnLink=''
      rigthBtnTxt='INVENTARIOS DE AUTOS NUEVOS'
      rigthBtnLink=''
      twoButtons='true'
      />
    </>
  );
}

export default ModelS;
