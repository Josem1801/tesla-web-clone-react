import React from 'react'
import Item from './components/Item'
import ModelXImg from './assets/Desktop-ModelX.jpeg'

function ModelX() {
  return (
    <>
      <Item
          title='Model X'
          desc='Plait'
          descLink=''
          backgroundImg={ModelXImg}
          leftBtnText= 'ORDEN PERSONLIZADA'
          leftBtnLink=''
          rigthBtnTxt='INVENTARIOS DE AUTOS NUEVOS'
          rigthBtnLink=''
          twoButtons='true'
          />
    </>
  );
}

export default ModelX;
