import React, { useState } from "react";
import './ItemField.css'
import HeartButton from './static/heart1.png';
import HeartButtonT from './static/heart2.png';
import SpaceIcon from './static/icon1.png';
import RoomIcon from './static/icon2.png';
import GarageIcon from './static/icon3.png';
import BathroomIcon from './static/icon4.png';

export default ItemField;

function ItemField(props) {
  const {
    cost,
    complexCost,
    iptuCost,
    address,
    description,
    totalspace,
    room,
    garage,
    bathroom
  } = props;

  const [favorite, setFavorite]=useState(true);

  return (
    <>
      <div className="title">
        <h1>R$ {cost}</h1>
        <div className="heart-button" onClick={()=>setFavorite(!favorite)}><img src={favorite?HeartButton:HeartButtonT} /></div>
      </div>

      <div className="description">
        <h3>condomínio R$ {complexCost} • IPTU R$ {iptuCost}</h3>
        <p>{description}</p>
      </div>

      <div className="footer">
        <div className="address-icons">
          <p>{address}</p>
          <ul>
            <li><img src={SpaceIcon} />{totalspace}m²</li>
            <li><img src={RoomIcon} />{room}</li>
            <li><img src={GarageIcon} />{garage}</li>
            <li><img src={BathroomIcon} />{bathroom}</li>
          </ul>
        </div>
        <div className="contact-buttons">
          <a className="btn-phone" href="#">Telefone</a>
          <button className="btn-msg">Mensagem</button>
        </div>
      </div>
    </>
  );
}
