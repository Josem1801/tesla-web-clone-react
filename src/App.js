import React, {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Item from './components/Item'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import Accessories from './assets/Desktop-Accessories.jpg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'

function App() {

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="App">
      {/* header */}
      <Header isMenuOpen={menuIsOpen} setIsMenuOpen={setMenuIsOpen}/>
     
      <div className="app__itemContainer">
        <Item
          title='Model S'
          desc='Visite una tienda'
          descLink=''
          backgroundImg={ModelS}
          leftBtnText= 'ORDEN PERSONLIZADA'
          leftBtnLink=''
          rigthBtnTxt='INVENTARIOS DE AUTOS NUEVOS'
          rigthBtnLink=''
          twoButtons='true'
          first
        />

        <Item
          title='Model 3'
          desc='Visite una tienda'
          descLink=''
          backgroundImg={Model3}
          leftBtnText= 'ORDEN PERSONLIZADA'
          leftBtnLink=''
          rigthBtnTxt='INVENTARIOS DE AUTOS NUEVOS'
          rigthBtnLink=''
          twoButtons='true'
        />
        
        <Item
          title='Model S'
          desc='Visite una tienda'
          descLink=''
          backgroundImg={ModelS}
          leftBtnText= 'ORDEN PERSONLIZADA'
          leftBtnLink=''
          rigthBtnTxt='INVENTARIOS DE AUTOS NUEVOS'
          rigthBtnLink=''
          twoButtons='true'
        />

        <Item
          title='Model X'
          desc='Visite una tienda'
          descLink=''
          backgroundImg={ModelX}
          leftBtnText= 'ORDEN PERSONLIZADA'
          leftBtnLink=''
          rigthBtnTxt='INVENTARIOS DE AUTOS NUEVOS'
          rigthBtnLink=''
          twoButtons='true'
        />  

        <Item
          title='Model Y'
          desc='Visite una tienda'
          descLink=''
          backgroundImg={ModelY}
          leftBtnText= 'ORDEN PERSONLIZADA'
          leftBtnLink=''
          rigthBtnTxt='INVENTARIOS DE AUTOS NUEVOS'
          rigthBtnLink=''
          twoButtons='true'
        />

        <Item
          title='Accesorios'
          desc='Visite una tienda'
          descLink=''
          backgroundImg={Accessories}
          leftBtnText= 'ORDEN PERSONLIZADA'
          leftBtnLink=''
          rigthBtnTxt='INVENTARIOS DE AUTOS NUEVOS'
          rigthBtnLink=''
          twoButtons='true'
        />
         <Item
          title='Energía solar y Powerwall'
          desc='Totalmente Eléctrico'
          descLink=''
          backgroundImg={SolarPanels}
          leftBtnText= 'MÁS INFORMACIÓN'
          leftBtnLink=''
          rigthBtnTxt='INVENTARIOS DE AUTOS NUEVOS'
          rigthBtnLink=''
          twoButtons={false}
          
        />
      </div>
      
    </div>
  );
}

export default App;
