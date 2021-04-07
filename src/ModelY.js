import './App.css';
import Item from './components/Item'
import ModelYImg from './assets/Desktop-ModelY.jpeg'

function ModelY() {
  return (
    <div className="App">
      <div className="app__itemContainer">
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
        </div>
    </div>
  );
}

export default ModelY;
