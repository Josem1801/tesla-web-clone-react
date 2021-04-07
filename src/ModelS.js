import './App.css';
import Item from './components/Item'
import ModelSImg from './assets/Desktop-ModelS.jpeg'

function ModelS() {
  return (
    <div className="App">
      <div className="app__itemContainer">
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
        </div>
    </div>
  );
}

export default ModelS;
