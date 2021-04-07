import './App.css';
import Item from './components/Item'
import Model3Img from './assets/Desktop-Model3.jpeg'

function Model3() {
  return (
    <div className="App">
      <div className="app__itemContainer">
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
        </div>
    </div>
  );
}

export default Model3;
