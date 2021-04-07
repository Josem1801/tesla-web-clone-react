import './App.css';
import Item from './components/Item'
import ModelSImg from './assets/Desktop-ModelX.jpeg'

function ModelX() {
  return (
    <div className="App">
      <div className="app__itemContainer">
        <Item
            title='Model X'
            desc='Plait'
            descLink=''
            backgroundImg={ModelSImg}
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

export default ModelX;
