import React from 'react'
import Buttom from './Button'
import './css/Item.css'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Items = ({ title, desc, desLink, backgroundImg, leftBtnText, leftBtnLink, rigthBtnTxt, RigthBtnLink, twoButtons, first}) => {
    return (
        <div className='item' style={{
            backgroundImage: `url(${backgroundImg})`
        }}>

            <div className="item__container">
                <div className="item__text">
                    <p>{title}</p>
                    <div className="item__textDesc">
                        <p>{desc}</p>
                    </div>
                </div>

                <div className="item__lowerThird">
                    <div className="item__buttons"></div>
                    <Buttom imp='primary' text={leftBtnText} link={leftBtnLink}/>
                    {twoButtons && (
                        <Buttom imp="secundary" text={rigthBtnTxt} link={RigthBtnLink} />
                    )}
                </div>
                {first && (
                    <div className="item__expand">
                        <ExpandMoreIcon style={{fontSize: 35}}/>
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default Items
